const BlankPage = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-136px)] rounded-xl border border-dashed p-6 mb-4">
      <div className="mb-6 pb-4 ">
        <h1 className="text-3xl font-bold tracking-tight ">
          Page Title
        </h1>
      </div>
      <div className="flex-1 w-full h-full" />
    </div>
  );
};

export default BlankPage;