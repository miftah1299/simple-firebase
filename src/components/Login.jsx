import { GoogleAuthProvider } from "firebase/auth/web-extension";

const Login = () => {
    const provider = new GoogleAuthProvider();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 mb-2"
                            htmlFor="username"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mb-4"
                    >
                        Login
                    </button>
                    <button
                        type="button"
                        className="w-full bg-zinc-100 py-2 rounded focus:outline-none focus:bg-zinc-300 flex items-center justify-center"
                    >
                        <svg
                            className="w-5 h-5 mr-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M23.5 12.3c0-.8-.1-1.5-.2-2.2H12v4.2h6.5c-.3 1.4-1.1 2.6-2.3 3.4v2.8h3.7c2.2-2 3.6-5 3.6-8.2z"
                                fill="#4285F4"
                            />
                            <path
                                d="M12 24c3.2 0 5.8-1.1 7.7-2.9l-3.7-2.8c-1 0.7-2.3 1.1-4 1.1-3.1 0-5.7-2.1-6.6-4.9H1.5v3.1C3.4 21.3 7.3 24 12 24z"
                                fill="#34A853"
                            />
                            <path
                                d="M5.4 14.5c-.2-.7-.4-1.4-.4-2.2s.1-1.5.4-2.2V6.9H1.5C.5 8.8 0 10.8 0 12.3s.5 3.5 1.5 5.4l3.9-3.2z"
                                fill="#FBBC05"
                            />
                            <path
                                d="M12 4.8c1.7 0 3.2.6 4.4 1.8l3.3-3.3C17.8 1.3 15.2 0 12 0 7.3 0 3.4 2.7 1.5 6.9l3.9 3.2c.9-2.8 3.5-4.9 6.6-4.9z"
                                fill="#EA4335"
                            />
                        </svg>
                        Login with Google
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;