# StorjWidget

<img src="https://github.com/striker43/storjWidget-exporter/blob/main/widget.png?raw=true" alt="0x187C8C43890fe4C91aFabbC62128D383A90548Dd" hight=340 width=340 align="right"/> 

StorjWidget is a <a href="https://scriptable.app">Scriptable</a> Widget that show aggregated stats of your storagenode(s). It will show the `daily ingress`, `daily egress`, `today's earnings`, `this month's earnings`, `space used / total available space`, `nodes online / total number of nodes`. The widget pulls data from the storjWidget-Exporter every 4-7 minutes. This is triggered by iOS and can not be changed. Therefore the heading contains the time of the last refresh to make sure the displayed data is up to date.

Tested with storj node version `1.16.1`

## Support
Feel free to raise issues if you find them and also raise a pull request if you'd like to contribute.

If you wish to support my work, please find my eth/storj wallet address below or scan the qr code:

`0x80E88Ac925B259faedeD7d05c99BfA934952084a`

<img src="wallet_qr.png" alt="0x187C8C43890fe4C91aFabbC62128D383A90548Dd" hight=100 width=100/> 

## Usage

1. Install <a href="https://scriptable.app">Scriptable</a> on your iPhone from the App Store.
2. Download storjWidget.js from this repository.
3. Import storjWidget.js in Scriptable.
4. Adjust lines 5 + 6 `widget.url` and `let url=`. Set `url` to the URL of your storjWidget-Exporter. Setting `widget.url` is optional. If you set it, you can configure Scriptable that it opens the specified `widget.url` in case you click on the widget on your homescreen. I suggest to point that to your Grafana dashboard in case you have that.
