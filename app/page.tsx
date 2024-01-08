import ExamplePage from "@/components/ExamplePage";
import { PropProvider } from "@/components/PropProvider";
import { getDefaultProps } from "@/lib/default-props";

export default function Home() {
  return (
    <div
      className="flex justify-center items-start w-full h-full "
      style={{ zoom: "67%" }}
    >
      <div className="flex-1 flex flex-col h-full pt-6">
        <h1 className="text-2xl font-bold text-center pb-8">Default</h1>

        {/* This provider overrides the one surrounding the entire app */}
        <PropProvider props={getDefaultProps()}>
          <ExamplePage />
        </PropProvider>
      </div>

      <div className="border-2 border-gray-300 flex self-stretch" />

      <div className="flex-1 flex flex-col h-full pt-6">
        <h1 className="text-2xl font-bold text-center pb-8">Modified</h1>
        <ExamplePage />
      </div>
    </div>
  );
}
