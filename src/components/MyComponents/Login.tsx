const Login = () => {
  return (
    <>
      <span className="text-gray-400 font-bold">INICIO DE SESIÓN</span>
      <li className="mb-1 group">
        <input type="text" placeholder="email" />
      </li>
      <li className="mb-1 group">
        <input type="password" placeholder="contra" />
      </li>
    </>
  );
};

export default Login;
