import React from 'react';

export default class Speaker extends React.Component {
  play = () => {
		//curl https://ttsmp3.com/makemp3_new.php -XPOST -d 'msg=뷨&lang=Seoyeon&source=ttsmp3'
		fetch("/pronounce?ch="+this.props.ch)
			.then(resp => resp.json())
			.then(data => {
				var audio = new Audio(data.URL);
				audio.play();
			})
			.catch(err => { console.log(err) })
  }

  render() {
    return (
      <h2>
        <a onClick={this.play} href="#">{String.fromCharCode(0x25b6)}</a>
      </h2>
    )
  }
}
