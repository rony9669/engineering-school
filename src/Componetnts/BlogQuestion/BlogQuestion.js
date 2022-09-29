import React from "react";

const BlogQuestion = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white">
          <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <h2 className="text-2xl font-semibold mb-4">
              Frequently Asked Questions (FAQ)
            </h2>

            <div className="space-y-4">
              <details className="w-full rounded-lg ring-1 ring-purple-600">
                <summary className="px-4 py-6">How does React work?</summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  <span>Answer: </span>React uses a declarative paradigm that
                  makes it easier to reason about your application and aims to
                  be both efficient and flexible. It designs simple views for
                  each state in your application, and React will efficiently
                  update and render just the right component when your data
                  changes.
                </p>
              </details>
              <details className="w-full rounded-lg ring-1 ring-purple-600">
                <summary className="px-4 py-6">
                  What are the differences between props and state?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  <span>PROPS: </span>The Data is passed from one component to
                  another.It is Immutable (cannot be modified).Props can be used
                  with state and functional components.Props are read-only.{" "}
                  <br />
                  <span>STATE: </span>The Data is passed within the component
                  only.It is Mutable ( can be modified).State can be used only
                  with the state components/class component (Before 16.0).State
                  is both read and write.
                </p>
              </details>
              <details className="w-full rounded-lg ring-1 ring-purple-600">
                <summary className="px-4 py-6">Why is useEffect used?</summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  <span>Answer: </span>The motivation behind the introduction of
                  useEffect Hook is to eliminate the side-effects of using
                  class-based components. For example, tasks like updating the
                  DOM, fetching data from API end-points, setting up
                  subscriptions or timers, etc can be lead to unwarranted
                  side-effects.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogQuestion;
