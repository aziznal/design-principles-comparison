import ExamplePage from "@/components/ExamplePage";
import { PropProvider } from "@/components/PropProvider";
import { getDefaultProps } from "@/lib/default-props";

export default function Home() {
  return (
    <div
      className="flex justify-center items-center w-full h-full "
      style={{ zoom: "67%" }}
    >
      <div className="flex-1 flex flex-col h-full pt-6">
        <h1 className="text-2xl font-bold text-center">Default</h1>

        {/* This provider overrides the one surrounding the entire app */}
        <PropProvider props={getDefaultProps()}>
          <ExamplePage />
        </PropProvider>
      </div>

      <div className="border-2 border-r-gray-800 h-[400vh]"></div>

      <div className="flex-1 flex flex-col h-full pt-6">
        <h1 className="text-2xl font-bold text-center">Modified</h1>
        <ExamplePage />
      </div>
    </div>
  );
}
