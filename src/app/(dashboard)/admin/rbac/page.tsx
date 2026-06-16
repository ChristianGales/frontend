"use client";

import { useState } from "react";
import {
    Shield, Users, BookOpen, GraduationCap, Calculator, ClipboardList,
    ChevronRight, Check, Lock, Unlock, Plus, X
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

// ─── Types ───────────────────────────────────────────────────────────────────

type Role = {
    id: string;
    label: string;
    description: string;
    icon: React.ElementType;
    color: string;
    userCount: number;
};

type Permission = {
    id: string;
    label: string;
    description: string;
    group: string;
};

type RolePermissions = Record<string, Record<string, boolean>>;

// ─── Static Data ─────────────────────────────────────────────────────────────

const ROLE_ICONS = [Shield, GraduationCap, BookOpen, ClipboardList, Users, Calculator];
const ROLE_COLORS = [
    "text-red-500", "text-primary-500", "text-green-500",
    "text-orange-500", "text-violet-500", "text-teal-500",
];

const DEFAULT_ROLES: Role[] = [
    { id: "ADMIN", label: "Administrator", description: "Full system access", icon: Shield, color: "text-rose-500", userCount: 2 },
    { id: "COLLEGE_REGISTRAR", label: "College Registrar", description: "Manages college records & enrollment", icon: GraduationCap, color: "text-blue-500", userCount: 3 },
    { id: "BASIC_ED_REGISTRAR", label: "Basic Ed Registrar", description: "Manages basic education records", icon: BookOpen, color: "text-green-500", userCount: 2 },
    { id: "FACULTY", label: "Faculty / Instructor", description: "Grade submission & class management", icon: ClipboardList, color: "text-amber-500", userCount: 24 },
    { id: "STUDENT", label: "Student", description: "View grades, schedules & records", icon: Users, color: "text-violet-500", userCount: 480 },
    { id: "ACCOUNTING", label: "Accounting", description: "Billing, fees & financial records", icon: Calculator, color: "text-teal-500", userCount: 4 },
];

const DEFAULT_PERMISSIONS: Permission[] = [
    { id: "users.view", label: "View Users", description: "See user list and profiles", group: "Users" },
    { id: "users.create", label: "Create Users", description: "Add new user accounts", group: "Users" },
    { id: "users.edit", label: "Edit Users", description: "Modify user details and roles", group: "Users" },
    { id: "users.delete", label: "Delete Users", description: "Remove user accounts", group: "Users" },
    { id: "enrollment.view", label: "View Enrollment", description: "See enrollment records", group: "Enrollment" },
    { id: "enrollment.manage", label: "Manage Enrollment", description: "Process and approve enrollments", group: "Enrollment" },
    { id: "enrollment.reports", label: "Enrollment Reports", description: "Generate enrollment reports", group: "Enrollment" },
    { id: "grades.view", label: "View Grades", description: "Access student grade records", group: "Grades" },
    { id: "grades.submit", label: "Submit Grades", description: "Enter and submit grades", group: "Grades" },
    { id: "grades.approve", label: "Approve Grades", description: "Finalize and lock grade records", group: "Grades" },
    { id: "curriculum.view", label: "View Curriculum", description: "See subjects and course structures", group: "Curriculum" },
    { id: "curriculum.manage", label: "Manage Curriculum", description: "Create and edit curriculum", group: "Curriculum" },
    { id: "finance.view", label: "View Finance", description: "Access billing and fee records", group: "Finance" },
    { id: "finance.manage", label: "Manage Finance", description: "Process payments and adjustments", group: "Finance" },
    { id: "settings.view", label: "View Settings", description: "See system configuration", group: "Settings" },
    { id: "settings.manage", label: "Manage Settings", description: "Modify system-wide settings", group: "Settings" },
];

const buildDefaultMatrix = (roles: Role[], perms: Permission[]): RolePermissions => ({
    ADMIN: Object.fromEntries(perms.map((p) => [p.id, true])),
    COLLEGE_REGISTRAR: Object.fromEntries(perms.map((p) => [p.id, ["enrollment.view","enrollment.manage","enrollment.reports","grades.view","grades.approve","curriculum.view","curriculum.manage","users.view"].includes(p.id)])),
    BASIC_ED_REGISTRAR: Object.fromEntries(perms.map((p) => [p.id, ["enrollment.view","enrollment.manage","grades.view","curriculum.view","users.view"].includes(p.id)])),
    FACULTY: Object.fromEntries(perms.map((p) => [p.id, ["grades.view","grades.submit","curriculum.view"].includes(p.id)])),
    STUDENT: Object.fromEntries(perms.map((p) => [p.id, ["grades.view","enrollment.view","curriculum.view"].includes(p.id)])),
    ACCOUNTING: Object.fromEntries(perms.map((p) => [p.id, ["finance.view","finance.manage","enrollment.view"].includes(p.id)])),
    ...Object.fromEntries(roles.filter(r => !["ADMIN","COLLEGE_REGISTRAR","BASIC_ED_REGISTRAR","FACULTY","STUDENT","ACCOUNTING"].includes(r.id)).map(r => [r.id, Object.fromEntries(perms.map(p => [p.id, false]))])),
});

const groupPermissions = (perms: Permission[]) =>
    perms.reduce<Record<string, Permission[]>>((acc, p) => {
        (acc[p.group] ??= []).push(p);
        return acc;
    }, {});

// ─── Component ───────────────────────────────────────────────────────────────

const PageRBAC = () => {
    const [roles, setRoles] = useState<Role[]>(DEFAULT_ROLES);
    const [permissions, setPermissions] = useState<Permission[]>(DEFAULT_PERMISSIONS);
    const [matrix, setMatrix] = useState<RolePermissions>(() => buildDefaultMatrix(DEFAULT_ROLES, DEFAULT_PERMISSIONS));
    const [selectedRole, setSelectedRole] = useState<string>(DEFAULT_ROLES[0].id);

    // Dialog states
    const [roleDialogOpen, setRoleDialogOpen] = useState(false);
    const [permDialogOpen, setPermDialogOpen] = useState(false);

    // New role form
    const [newRoleLabel, setNewRoleLabel] = useState("");
    const [newRoleDesc, setNewRoleDesc] = useState("");
    const [newRoleColorIdx, setNewRoleColorIdx] = useState(0);
    const [newRoleIconIdx, setNewRoleIconIdx] = useState(0);

    // New permission form
    const [newPermLabel, setNewPermLabel] = useState("");
    const [newPermDesc, setNewPermDesc] = useState("");
    const [newPermGroup, setNewPermGroup] = useState("");

    const grouped = groupPermissions(permissions);
    const currentPerms = matrix[selectedRole] ?? {};
    const role = roles.find((r) => r.id === selectedRole)!;
    const isAdmin = selectedRole === "ADMIN";
    const activeCount = Object.values(currentPerms).filter(Boolean).length;

    // ── Toggle permission ──
    const toggle = (permId: string) => {
        if (isAdmin) return;
        setMatrix((prev) => ({
            ...prev,
            [selectedRole]: { ...prev[selectedRole], [permId]: !prev[selectedRole][permId] },
        }));
    };

    const toggleGroup = (group: string) => {
        if (isAdmin) return;
        const groupPerms = grouped[group];
        const allOn = groupPerms.every((p) => currentPerms[p.id]);
        setMatrix((prev) => ({
            ...prev,
            [selectedRole]: {
                ...prev[selectedRole],
                ...Object.fromEntries(groupPerms.map((p) => [p.id, !allOn])),
            },
        }));
    };

    // ── Create Role ──
    const handleCreateRole = () => {
        if (!newRoleLabel.trim()) return;
        const id = newRoleLabel.trim().toUpperCase().replace(/\s+/g, "_");
        const newRole: Role = {
            id,
            label: newRoleLabel.trim(),
            description: newRoleDesc.trim() || "Custom role",
            icon: ROLE_ICONS[newRoleIconIdx],
            color: ROLE_COLORS[newRoleColorIdx],
            userCount: 0,
        };
        setRoles((prev) => [...prev, newRole]);
        setMatrix((prev) => ({
            ...prev,
            [id]: Object.fromEntries(permissions.map((p) => [p.id, false])),
        }));
        setNewRoleLabel("");
        setNewRoleDesc("");
        setNewRoleColorIdx(0);
        setNewRoleIconIdx(0);
        setRoleDialogOpen(false);
    };

    // ── Create Permission ──
    const handleCreatePermission = () => {
        if (!newPermLabel.trim() || !newPermGroup.trim()) return;
        const id = `${newPermGroup.trim().toLowerCase()}.${newPermLabel.trim().toLowerCase().replace(/\s+/g, "_")}`;
        const newPerm: Permission = {
            id,
            label: newPermLabel.trim(),
            description: newPermDesc.trim() || "",
            group: newPermGroup.trim(),
        };
        setPermissions((prev) => [...prev, newPerm]);
        // Add the new permission to all roles as false (except ADMIN = true)
        setMatrix((prev) => {
            const updated = { ...prev };
            roles.forEach((r) => {
                updated[r.id] = { ...(updated[r.id] ?? {}), [id]: r.id === "ADMIN" };
            });
            return updated;
        });
        setNewPermLabel("");
        setNewPermDesc("");
        setNewPermGroup("");
        setPermDialogOpen(false);
    };

    return (
        <div className="flex flex-col min-h-[calc(100vh-136px)] bg-background p-6 mb-4">
            {/* Header */}
            <div className="mb-6 pb-4 border-b flex items-start justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Roles & Permissions</h1>
                    <p className="text-sm text-muted-foreground mt-1">
                        Select a role to view and configure its access permissions.
                    </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                    <Button variant="outline" size="sm" onClick={() => setPermDialogOpen(true)}>
                        <Plus size={14} className="mr-1.5" />
                        New Permission
                    </Button>
                    <Button size="sm" onClick={() => setRoleDialogOpen(true)}>
                        <Plus size={14} className="mr-1.5" />
                        New Role
                    </Button>
                </div>
            </div>

            {/* Two-column layout */}
            <div className="flex gap-4 flex-1 min-h-0">
                {/* ── Left: Roles ── */}
                <div className="w-72 shrink-0 flex flex-col gap-2">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground px-1 mb-1">
                        System Roles
                    </p>
                    <ScrollArea className="flex-1">
                        <div className="flex flex-col gap-1 pr-2">
                            {roles.map((r) => {
                                const Icon = r.icon;
                                const isSelected = r.id === selectedRole;
                                const count = Object.values(matrix[r.id] ?? {}).filter(Boolean).length;
                                return (
                                    <button
                                        key={r.id}
                                        onClick={() => setSelectedRole(r.id)}
                                        className={cn(
                                            "w-full text-left rounded-lg px-3 py-3 flex items-center gap-3 transition-colors group",
                                            isSelected ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                                        )}
                                    >
                                        <div className={cn("shrink-0", isSelected ? "text-primary-foreground" : r.color)}>
                                            <Icon size={18} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between gap-2">
                                                <span className="text-sm font-medium truncate">{r.label}</span>
                                                <ChevronRight
                                                    size={14}
                                                    className={cn(
                                                        "shrink-0 transition-transform",
                                                        isSelected ? "opacity-100" : "opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0"
                                                    )}
                                                />
                                            </div>
                                            <div className="flex items-center justify-between mt-0.5">
                                                <span className={cn("text-xs", isSelected ? "text-primary-foreground/70" : "text-muted-foreground")}>
                                                    {r.userCount} {r.userCount === 1 ? "user" : "users"}
                                                </span>
                                                <span className={cn("text-xs", isSelected ? "text-primary-foreground/70" : "text-muted-foreground")}>
                                                    {count}/{permissions.length}
                                                </span>
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </ScrollArea>
                </div>

                {/* ── Right: Permissions ── */}
                <div className="flex-1 min-w-0 rounded-lg border bg-card flex flex-col">
                    <div className="px-5 py-4 border-b flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className={cn("p-2 rounded-md bg-muted", role.color)}>
                                <role.icon size={18} />
                            </div>
                            <div>
                                <h2 className="font-semibold text-base leading-tight">{role.label}</h2>
                                <p className="text-xs text-muted-foreground">{role.description}</p>
                            </div>
                        </div>
                        <div className="shrink-0">
                            {isAdmin ? (
                                <Badge variant="destructive" className="gap-1">
                                    <Lock size={11} /> Locked — Full Access
                                </Badge>
                            ) : (
                                <Badge variant="secondary" className="gap-1">
                                    <Unlock size={11} /> {activeCount} of {permissions.length} enabled
                                </Badge>
                            )}
                        </div>
                    </div>

                    <ScrollArea className="flex-1">
                        <div className="px-5 py-4 flex flex-col gap-6">
                            {Object.entries(grouped).map(([group, perms]) => {
                                const allOn = perms.every((p) => currentPerms[p.id]);
                                const someOn = perms.some((p) => currentPerms[p.id]);
                                return (
                                    <div key={group}>
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                                    {group}
                                                </span>
                                                {someOn && !allOn && (
                                                    <span className="text-xs text-muted-foreground">
                                                        ({perms.filter((p) => currentPerms[p.id]).length}/{perms.length})
                                                    </span>
                                                )}
                                            </div>
                                            {!isAdmin && (
                                                <button
                                                    onClick={() => toggleGroup(group)}
                                                    className={cn(
                                                        "text-xs px-2 py-0.5 rounded-md border transition-colors",
                                                        allOn
                                                            ? "border-primary/30 text-primary bg-primary/5 hover:bg-primary/10"
                                                            : "border-border text-muted-foreground hover:bg-muted"
                                                    )}
                                                >
                                                    {allOn ? "Disable all" : "Enable all"}
                                                </button>
                                            )}
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            {perms.map((perm, i) => {
                                                const enabled = !!currentPerms[perm.id];
                                                return (
                                                    <div key={perm.id}>
                                                        <div
                                                            className={cn(
                                                                "flex items-center justify-between px-3 py-2.5 rounded-md transition-colors",
                                                                !isAdmin && "hover:bg-muted/60 cursor-pointer"
                                                            )}
                                                            onClick={() => toggle(perm.id)}
                                                        >
                                                            <div className="flex items-center gap-3 min-w-0">
                                                                <div className={cn(
                                                                    "w-4 h-4 rounded shrink-0 flex items-center justify-center border transition-colors",
                                                                    enabled ? "bg-primary border-primary text-primary-foreground" : "border-border bg-background"
                                                                )}>
                                                                    {enabled && <Check size={10} strokeWidth={3} />}
                                                                </div>
                                                                <div className="min-w-0">
                                                                    <p className="text-sm font-medium">{perm.label}</p>
                                                                    <p className="text-xs text-muted-foreground truncate">{perm.description}</p>
                                                                </div>
                                                            </div>
                                                            <Switch
                                                                checked={enabled}
                                                                disabled={isAdmin}
                                                                onCheckedChange={() => toggle(perm.id)}
                                                                onClick={(e) => e.stopPropagation()}
                                                                className="shrink-0 ml-4"
                                                            />
                                                        </div>
                                                        {i < perms.length - 1 && <Separator className="mx-3" />}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </ScrollArea>
                </div>
            </div>

            {/* ── Create Role Dialog ── */}
            <Dialog open={roleDialogOpen} onOpenChange={setRoleDialogOpen}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Create New Role</DialogTitle>
                        <DialogDescription>
                            Define a new role. You can assign permissions after creation.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col gap-4 py-2">
                        <div className="flex flex-col gap-1.5">
                            <Label htmlFor="role-label">Role Name <span className="text-destructive">*</span></Label>
                            <Input
                                id="role-label"
                                placeholder="e.g. Department Head"
                                value={newRoleLabel}
                                onChange={(e) => setNewRoleLabel(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <Label htmlFor="role-desc">Description</Label>
                            <Input
                                id="role-desc"
                                placeholder="Brief description of this role"
                                value={newRoleDesc}
                                onChange={(e) => setNewRoleDesc(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <Label>Icon</Label>
                            <div className="flex gap-2 flex-wrap">
                                {ROLE_ICONS.map((Icon, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setNewRoleIconIdx(idx)}
                                        className={cn(
                                            "w-9 h-9 rounded-md border flex items-center justify-center transition-colors",
                                            newRoleIconIdx === idx
                                                ? "bg-primary text-primary-foreground border-primary"
                                                : "hover:bg-muted border-border"
                                        )}
                                    >
                                        <Icon size={16} />
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <Label>Color</Label>
                            <div className="flex gap-2 flex-wrap">
                                {ROLE_COLORS.map((color, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setNewRoleColorIdx(idx)}
                                        className={cn(
                                            "w-9 h-9 rounded-md border flex items-center justify-center transition-colors",
                                            newRoleColorIdx === idx ? "border-foreground bg-muted" : "hover:bg-muted border-border"
                                        )}
                                    >
                                        <div className={cn("w-4 h-4 rounded-full", color.replace("text-", "bg-"))} />
                                    </button>
                                ))}
                            </div>
                        </div>
                        {/* Preview */}
                        {newRoleLabel && (
                            <div className="flex items-center gap-3 rounded-lg border px-3 py-2.5 bg-muted/40">
                                <div className={cn(ROLE_COLORS[newRoleColorIdx])}>
                                    {(() => { const Icon = ROLE_ICONS[newRoleIconIdx]; return <Icon size={18} />; })()}
                                </div>
                                <div>
                                    <p className="text-sm font-medium">{newRoleLabel}</p>
                                    <p className="text-xs text-muted-foreground">{newRoleDesc || "Custom role"}</p>
                                </div>
                            </div>
                        )}
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setRoleDialogOpen(false)}>
                            Cancel
                        </Button>
                        <Button onClick={handleCreateRole} disabled={!newRoleLabel.trim()}>
                            Create Role
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* ── Create Permission Dialog ── */}
            <Dialog open={permDialogOpen} onOpenChange={setPermDialogOpen}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Create New Permission</DialogTitle>
                        <DialogDescription>
                            Add a new permission. It will be disabled by default for all roles except Admin.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col gap-4 py-2">
                        <div className="flex flex-col gap-1.5">
                            <Label htmlFor="perm-group">Group <span className="text-destructive">*</span></Label>
                            <Input
                                id="perm-group"
                                placeholder="e.g. Reports (existing or new group)"
                                value={newPermGroup}
                                onChange={(e) => setNewPermGroup(e.target.value)}
                                list="existing-groups"
                            />
                            <datalist id="existing-groups">
                                {Object.keys(grouped).map((g) => (
                                    <option key={g} value={g} />
                                ))}
                            </datalist>
                            <p className="text-xs text-muted-foreground">
                                Type an existing group to add to it, or a new name to create one.
                            </p>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <Label htmlFor="perm-label">Permission Name <span className="text-destructive">*</span></Label>
                            <Input
                                id="perm-label"
                                placeholder="e.g. Export Reports"
                                value={newPermLabel}
                                onChange={(e) => setNewPermLabel(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <Label htmlFor="perm-desc">Description</Label>
                            <Input
                                id="perm-desc"
                                placeholder="What this permission grants access to"
                                value={newPermDesc}
                                onChange={(e) => setNewPermDesc(e.target.value)}
                            />
                        </div>
                        {/* Preview */}
                        {newPermLabel && newPermGroup && (
                            <div className="rounded-lg border px-3 py-2.5 bg-muted/40">
                                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                                    {newPermGroup}
                                </p>
                                <p className="text-sm font-medium">{newPermLabel}</p>
                                <p className="text-xs text-muted-foreground">{newPermDesc || "No description"}</p>
                            </div>
                        )}
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setPermDialogOpen(false)}>
                            Cancel
                        </Button>
                        <Button onClick={handleCreatePermission} disabled={!newPermLabel.trim() || !newPermGroup.trim()}>
                            Create Permission
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default PageRBAC;