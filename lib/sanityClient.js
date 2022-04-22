const sanityClient = require('@sanity/client')

export const client = sanityClient({
    projectId:'gf7v4gib',
    dataset:'production',
    apiVersion:'v1',
    token:'skkl1vHNY0SgokVyTvV8ybo1xF42mWiW5FaiUWYAylphzKpWNJ6hiMhKdAOtl7iwHtqN8bgtM1X8at8mk1IKZRg2sISkLutf062NgvPP1BBxskxWtVaNUg8eroEemovqTc3RJRyrXKNXLpWfwHoPlC2IKOtUlhVC4ATU42Bu1XcgNb7FftUN',
    useCdn:false
})