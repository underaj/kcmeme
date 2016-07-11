import React from 'react';

export default class CanvasComponent extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas();
  }
  updateCanvas() {
    const that = this;
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    const width = 600;
    const height = 400;
    img.src = "/img/dennisting.png";
    canvas.width = 600;
    canvas.height = 400;
    console.log(this.props.protip);
    
    img.onload = function() {
      drawProTip();
    }

    function drawProTip() {
      ctx.drawImage(img, 0, 0, width, height);
      ctx.lineWidth  = 4;
      ctx.font = '20pt sans-serif';
      ctx.strokeStyle = 'black';
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';

      var topText = 'HI';
      var bottomText = 'BYE';
      if (that.props) {
        topText = that.props.protip.topText.toUpperCase();
        bottomText = that.props.protip.bottomText.toUpperCase();
      }

      var x = width / 2;
      var y = 0;

      wrapText(ctx, topText, x, y, 300, 28, false);

      ctx.textBaseline = 'bottom';
      y = height;

      wrapText(ctx, bottomText, x, y, 300, 28, true);

    }

    function wrapText(context, text, x, y, maxWidth, lineHeight, fromBottom) {
      var pushMethod = (fromBottom)?'unshift':'push';
      lineHeight = (fromBottom)?-lineHeight:lineHeight;
      var lines = [];
      var y = y;
      var line = '';
      var words = text.split(' ');

      for (var n = 0; n < words.length; n++) {
        var testLine = line + ' ' + words[n];
        var metrics = context.measureText(testLine);
        var testWidth = metrics.width;

        if (testWidth > maxWidth) {
          lines[pushMethod](line);
          line = words[n] + ' ';
        } else {
          line = testLine;
        }
      }
      lines[pushMethod](line);

      for (var k in lines) {
        context.strokeText(lines[k], x, y + lineHeight * k);
        context.fillText(lines[k], x, y + lineHeight * k);
      }
    }
  }

  render() {
    return (
      <canvas ref="canvas"/>
    );
  }
}