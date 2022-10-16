const Error = ({children}) => {
    return (
        <div>
            <p 
                className="text-white bg-red-800 p-2 rounded-md font-bold text-center mb-3">
                {children}
            </p>
        </div>
    )
}

export default Error