const MaintenancePage = () => {
    return (
      <div className="flex flex-col min-h-[calc(100vh-136px)] rounded-xl border border-dashed p-6 mb-4">
        <div className="flex-1 w-full h-full">
          <div className="flex flex-col items-center justify-center text-center py-12">
            <img
              src="/images/maintenance.png"
              alt="Maintenance"
              className="max-h-[50vh] w-full max-w-3xl object-contain mb-6"
            />
            <p className="text-muted-foreground mb-2">
              This page is currently under maintenance.
              We are working hard to bring it back online as soon as possible.
            </p>
            <p className="text-sm text-muted-foreground">
              Please check back again later.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default MaintenancePage;