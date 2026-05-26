const Userpage = () => {
    return (
        <div className="flex flex-col min-h-[calc(100vh-136px)] rounded-xl border border-dashed p-6 mb-4">
            <div className="mb-6 pb-4 ">
              <h1 className="text-3xl font-bold tracking-tight ">
                Users
              </h1>
            </div>
            <div className="flex-1 w-full h-full">
              <div className="text-center py-8">
                <p className="text-muted-foreground">Users content goes here</p>
              </div>
            </div>
        </div>
    );      
};

export default Userpage;