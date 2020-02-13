# Artificial Scarcity

Supposedly people are more likely to buy something if it seems scarce. This plugin just drops a nice timer wherever to make it seem like a sale is ending soon, inventory is running out, or whatever else.

![Example of timer](https://github.com/blakeylakey/artificial-scarcity-plugin/blob/master/example.PNG?raw=true)

## Usage

Just use the short code ```[artificial_scarcity]``` to put the timer wherever it best seems fit. There are several attributes you can pass:

```timeline="year|week|day|hour|minute|second"``` will set how long the timer will run for. It will always run in the timezone of the browser. Default is ```timeline="day"```

```color_theme="color|bnw"``` sets the color theme of the timer. Color corresponds to the happy yellow, blue, red, orange theme. BNW corresponds to a black and white color theme. Default is ```color_theme="color"```

```layout="days,hours,minutes,seconds"``` sets the what parts of the timer will display and in what order. You can reorder them if you want, or omit parts like the seconds timer or the days timer. Default is ```layout="days,hours,minutes,seconds"```

## License
[MIT](https://choosealicense.com/licenses/mit/)