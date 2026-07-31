import { Component } from "react";
import { Link } from "wouter";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-trail-light flex items-center justify-center px-8">
          <div className="max-w-md text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-sun-amber mb-3">SOMETHING WENT WRONG</p>
            <h1 className="font-['Fraunces'] font-bold text-[2.5rem] text-charcoal leading-tight mb-4">
              {this.props.title || "This page ran into a problem."}
            </h1>
            <p className="font-['Open_Sans'] text-[16px] text-cool-gray leading-relaxed mb-8">
              {this.props.description || "We're sorry about that. Try refreshing the page or head back home."}
            </p>
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => this.setState({ hasError: false, error: null })}
                className="inline-flex items-center gap-2 bg-trail-green text-white font-['Open_Sans'] font-bold text-[14px] px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                Try Again
              </button>
              <Link href="/" className="inline-flex items-center gap-2 border border-warm-gray text-cool-gray font-['Open_Sans'] font-bold text-[14px] px-6 py-3 rounded-lg hover:bg-muted-fill transition-colors duration-200">
                Go Home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export class FeedErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center py-16">
          <p className="font-['Open_Sans'] text-[15px] text-cool-gray">
            Unable to load posts right now. Please try again shortly.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
