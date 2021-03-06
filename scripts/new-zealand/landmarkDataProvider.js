const landmarks = [ 
    {
        name: "Moeraki Boulders",
        description: "The Moeraki Boulders are some of the most fascinating things to see in New Zealand and this is definitely one of the most popular attractions in the country. These perfectly spherical rock formations are technically not boulders but concretions exposed by erosion, and are found down on the Otago coast in the South Island. Maori myth says that these boulders are in fact the debris of a massive waka (canoe)."
    },
    {
        name: "Craters of the Moon",
        description: "If you feel like taking a stroll into another world then just north of Taupo on the North Island you’ll find the Craters of the Moon Geothermal Walk. The name gives it away. The land, with its huge craters, lack of plant life and seething gouts of steam, looks more like another planet than anything terrestrial. Geothermal activity is responsible for the steam, of course, as well as the pervasive, sulphurous smell. Visitors pay a nominal fee for admission and follow a carefully mapped hike through the dramatic terrain. The walk takes about an hour to an hour and a half, depending on the route selected."
    },
    {
        name: "The Sky Tower",
        description: "The Sky Tower is the tallest of its kind in the Southern Hemisphere. Its construction began in 1994 and was completed in 1997 – a solid six months ahead of schedule. Architect Gordon Moller was in charge of its design, partnering with Fletcher Building to conceive what is now Auckland’s most distinguished man-made landmarks. The tower is a popular attraction for thrill-seekers and fine diners and also serves as an aerial transmission centre for TV channels, radio stations, weather forecasting and telecommunications providers."
    },
    {
        name: "Huka Falls",
        description: "When the Maori in the area named the falls after their word for “foam”, they surely hit the old nail on the head. This is one of the most visited natural attractions in the country and is a site you do not want to miss. Approximately 220,000 litres of water per second pour from the waterfall. These falls are fed by the Waikato River, one of the country’s longest rivers, which drains into Lake Taupo. Those wanting a different perspective can enjoy a boat ride to the base of the falls. Other activities near Huka Falls include mountain biking, swimming, birdwatching and canoeing."
    }
]

export const useLandmark = () => {
    return landmarks.slice()
}