
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll"

function TextGradientScrollExample() {
  return (
    <div className="min-h-[200vh] w-full relative">
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-5xl mx-auto p-4 items-center">
          <div className="flex p-4 text-2xl pt-14 w-[700px] mx-auto h-[500px] flex flex-col items-start justify-end pointer-events-auto">
            <TextGradientScroll text="We bring ideas to life—beyond the mind and into the world—by riding enduring trends that spark human connection and meaningful growth. Along the way, we accelerate bold concepts, guiding individuals and organizations toward their core purpose and helping them build what truly thrives." />
          </div>
        </div>
      </div>

      <div className="h-[200vh]" aria-hidden="true" />
    </div>
  )
}

export { TextGradientScrollExample }
