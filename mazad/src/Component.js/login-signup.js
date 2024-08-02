import React, { useState } from 'react';

const SocialButton = ({ icon }) => (
  <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center mr-2">
    {icon}
  </button>
);

const InputField = ({ type, placeholder }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="w-full p-2 mb-4 bg-gray-100 rounded"
  />
);

const ActionButton = ({ children, onClick, color }) => (
  <button
    onClick={onClick}
    className={`w-full p-2 rounded text-white ${color} hover:opacity-90 transition-opacity`}
  >
    {children}
  </button>
);

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const togglePage = () => setIsLogin(!isLogin);

  return (
    <div className="flex min-h-screen">
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8">
        <h1 className="text-3xl font-bold mb-6">{isLogin ? 'Sign in' : 'Create Account'}</h1>
        <div className="flex mb-4">
          <SocialButton icon="f" />
          <SocialButton icon="G+" />
          <SocialButton icon="in" />
        </div>
        <p className="mb-4 text-sm text-gray-600">
          {isLogin ? 'or use your account' : 'or use your email for registration'}
        </p>
        {!isLogin && <InputField type="text" placeholder="Name" />}
        <InputField type="email" placeholder="Email" />
        <InputField type="password" placeholder="Password" />
        {isLogin && (
          <p className="mb-4 text-sm text-blue-600 cursor-pointer hover:underline">
            Forgot your password?
          </p>
        )}
        <ActionButton color=" bg-[#8EABBF]" onClick={() => {}}>
          {isLogin ? 'SIGN IN' : 'SIGN UP'}
        </ActionButton>
        <p className="mt-4 text-sm text-center">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={togglePage}
          >
            {isLogin ? 'Sign up' : 'Sign in'}
          </span>
        </p>
      </div>
      <div className="hidden md:flex md:w-1/2 bg-[#8EABBF] items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            {isLogin ? 'Hello, Friend!' : 'Welcome Back!'}
          </h2>
          <p className="mb-8">
            {isLogin
              ? 'Enter your personal details and start journey with us'
              : 'To keep connected with us please login with your personal info'}
          </p>
          <ActionButton color="bg-transparent border border-white" onClick={togglePage}>
            {isLogin ? 'SIGN UP' : 'SIGN IN'}
          </ActionButton>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;