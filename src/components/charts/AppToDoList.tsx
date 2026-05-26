"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

const TodoList = () => {

    //state to store date
    const [date, setDate] = React.useState<Date | undefined >(new Date())
    const [open, setOpen] = React.useState(false)

    return (
        <div>
            <h1 className="text-lg font-medium mb-4">Todo List</h1>
            {/* Popover Calendar */}
            <Popover>
                <PopoverTrigger asChild>
                    <Button  className="w-full text-white">
                        <CalendarIcon />
                        {date ? format(date, "PPP") : <span>Pick a date</span>} 
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-10 w-auto">
                    <PopoverHeader>
                    <Calendar
                            mode="single"
                            selected={date}
                            onSelect={(date)=>{
                                setDate(date)
                                setOpen(false)
                            }}
                            className="rounded-lg border"
                        />
                    </PopoverHeader>
                </PopoverContent>
            </Popover>



            {/* Todo List */}
            <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
                <div className="flex flex-col gap-4 m-2">
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1"  />

                            <label
                                htmlFor="item1"
                                className="text-sm text-muted-foreground"
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1"  />

                            <label
                                htmlFor="item1"
                                className="text-sm text-muted-foreground"
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1"  />

                            <label
                                htmlFor="item1"
                                className="text-sm text-muted-foreground"
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1"  />

                            <label
                                htmlFor="item1"
                                className="text-sm text-muted-foreground"
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1"  />

                            <label
                                htmlFor="item1"
                                className="text-sm text-muted-foreground"
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1"  />

                            <label
                                htmlFor="item1"
                                className="text-sm text-muted-foreground"
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1"  />

                            <label
                                htmlFor="item1"
                                className="text-sm text-muted-foreground"
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                </div>
               
            </ScrollArea>
        </div>
    );
};

export default TodoList;