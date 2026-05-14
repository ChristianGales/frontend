const MaintenancePage = () => {
    return (
      <div className="flex h-screen items-center justify-center overflow-hidden bg-background ">
        
        <div className="flex max-w-2xl flex-col items-center text-center">
          
          <img
            src="/images/maintenance.png"
            alt="Maintenance"
            className="max-h-[70vh] w-full max-w-3xl object-contain"
          />

          <p className="mt-4 max-w-xl text-muted-foreground">
            Northern Samar Colleges portal is currently undergoing scheduled
            maintenance to improve system performance and reliability.
          </p>
  
          <p className="mt-2 text-sm text-muted-foreground">
            Please check back again later.
          </p>
  
        </div>
      </div>
    );
  };
  
  export default MaintenancePage;