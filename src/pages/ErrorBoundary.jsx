import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught by boundary:", error, info);
  }

  handleReload = () => {
    this.setState({ hasError: false });
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <section className="min-h-screen bg-[#F0EDE6] flex flex-col items-center justify-center px-4 text-center">
          <span className="text-orange-500 text-sm mb-4">✳ Oops</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Something went wrong
          </h1>
          <p className="text-gray-600 mb-10 max-w-md">
            This section hit an unexpected error. Try going back to the
            homepage.
          </p>
          <button
            onClick={this.handleReload}
            className="rounded-full bg-orange-500 text-white px-8 py-3 hover:bg-black transition-colors duration-300"
          >
            Back to home
          </button>
        </section>
      );
    }

    return this.props.children;
  }
}
