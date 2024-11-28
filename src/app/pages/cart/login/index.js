


function Login() {
    return (
        <div style={{height:"90vh", backgroundImage: 'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize:"cover"}}
        className="flex justify-center items-center">
            <div className="container w-full max-w-md">
              <form onSubmit={handleSubmit}></form>  
            </div>
        </div>
    )
}

export default Login;