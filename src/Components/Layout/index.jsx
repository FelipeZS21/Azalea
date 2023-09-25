const Layout = ({ children }) =>{
    return(
        <div className="flex flex-col mt-20 items-center bg-indigo-900">
            {children}
        </div>
    )
}   

export { Layout }