const NotFound = () => {
    return (
      <div className="flex h-screen items-center justify-center overflow-hidden bg-background ">
        <div className="flex flex-col items-center">
          
          <img
            src="/images/404.png"
            alt="404 Not Found"
            className="max-h-[70vh] w-full max-w-3xl object-contain"
          />
  
          <p className="mt-4 max-w-xl text-muted-foreground">
            The page you are looking for does not exist or has been moved.
          </p>
  
        </div>
      </div>
    );
  };
  
  export default NotFound;