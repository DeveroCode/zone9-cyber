import { generateClasses } from "@formkit/themes";

const config = {
    config: {
        classes: generateClasses({
            global: {
                input: 'w-full border border-gray-300 px-4 py-2 rounded-md mb-4 md:mb-0 text-secondary focus:outline-none focus:ring-0 focus:border-gray-300',
                label: 'text-md font-semibold px-2 block mx-auto mb-2 text-secondary',
                message: 'text-red-500 text-sm font-poppins capitalize'
            },
            submit: {
                input: 'text-secondary py-3 px-6 md:px-8 lg:px-10 rounded-full mt-6 lg:mt-10 font-bold text-base md:text-lg lg:text-xl bg-primary border-none hover:bg-secondary hover:text-primary transition-all duration-300'
            }
        }),
    }
}


export default config