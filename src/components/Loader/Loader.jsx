const Loader = () => {
    return (
        <div className="flex w-full justify-center items-center fixed top-0 left-0 z-30 loader-bg h-full bg-[rgba(0,0,0,0.7)]">
            <div className="h-[100px] w-[100px]">
                <figure className="h-full w-full flex justify-center items-center animate-cstm-pulse">
                    <img src="/images/poshlogo.png" alt="Image" style={{ width: '100px', height: "100px" }} className="h-full w-full object-contain" />
                </figure>
            </div>
        </div >
    );
};

export default Loader;
