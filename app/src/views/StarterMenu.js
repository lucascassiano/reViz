/* eslint no-eval: 0 */
import React, { Component } from 'react';
import '../styles/StarterMenu.css';
import logo from '../assets/reviz_logo_starter.svg';
import github from '../assets/reviz_github.svg';
import { Player } from 'video-react';
import Vimeo from 'react-vimeo';
const electron = window.require('electron'); // little trick to import electron in react
const ipcRenderer = electron.ipcRenderer;

class Video extends Component {
	render() {
		var { vimeo, autoplay = false, title, github, link } = this.props;

		if (autoplay) autoplay = 1;
		else autoplay = 0;
		return (
			<div>
				<div className="video-title">{title}</div>
				<iframe
					src={
						'https://player.vimeo.com/video/' +
						vimeo +
						'?&autoplay=' +
						autoplay +
						'&color=000&title=0byline=0&portrait=0'
					}
					className="starter-video"
				/>
				<div className="video-github">{github}</div>
				<div className="video-link">{link}</div>
			</div>
		);
	}
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			animate: false,
			visible: true
		};

		this.hide = this.hide.bind(this);
		this.animate = this.animate.bind(this);

		this.newFile = this.newFile.bind(this);
		this.openFile = this.openFile.bind(this);

		ipcRenderer.on('new-project', () => {
			this.animate();
		});

		ipcRenderer.on('open-project', () => {
			this.animate();
		});
	}

	animate = () => {
		this.setState({
			animate: true
		});

		setInterval(this.hide, 1250);
	};

	hide() {
		this.setState({
			visible: false
		});

		if (this.props.onEnd) this.props.onEnd();
	}

	//*internal calls

	newFile() {
		ipcRenderer.send('new-project');
	}

	openFile() {
		ipcRenderer.send('open-project');
	}

	render() {
		var _class = 'starter-menu';
		if (this.state.animate) {
			_class += ' starter-menu-off';
		}

		if (this.state.visible == false) {
			_class += ' starter-gone';
		}

		return (
			<div className={_class}>
				<div className="sidebar">
					<img src={logo} className="logo" />
					<div className="version">version 1.0 - beta</div>
					<div className="user-menu" />
					<ul>
						<li onClick={this.newFile}>New Project</li>
						<li onClick={this.openFile}>Open Project</li>
						<li>Tutorials</li>
						<li>Users</li>
						<li>Developers</li>
					</ul>

					<img src={github} className="logo-bottom" />
				</div>

				<div className="starter-content">
					<div className="starter-content-title">Examples and Templates</div>

					<div className="grid">
						<div className="box">
							<Video
								vimeo="252781716"
								title={'Mapbox Tiles'}
								github="http://github.com/lucascassiano"
								link="test.mit.edu"
							/>
						</div>
						<div className="box">
							<Video
								vimeo="252781716"
								title={'Mapbox Tiles'}
								github="http://github.com/lucascassiano"
								link="test.mit.edu"
							/>
						</div>
						<div className="box">
							<Video
								vimeo="252781716"
								title={'Mapbox Tiles'}
								github="http://github.com/lucascassiano"
								link="test.mit.edu"
							/>
						</div>
						<div className="box">
							<Video
								vimeo="252781716"
								title={'Mapbox Tiles'}
								github="http://github.com/lucascassiano"
								link="test.mit.edu"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;