const Layout = ({ children }) =>{
    return(
        <div className="flex flex-col items-center bg-indigo-900">
            {children}
        </div>
    )
}   

export { Layout }