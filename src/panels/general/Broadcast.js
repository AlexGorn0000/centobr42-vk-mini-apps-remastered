import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import bridge from '@vkontakte/vk-bridge'; 
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Gallery from '@vkontakte/vkui/dist/components/Gallery/Gallery';
import InfoRow from '@vkontakte/vkui/dist/components/InfoRow/InfoRow';
import Progress from '@vkontakte/vkui/dist/components/Progress/Progress';
import List from '@vkontakte/vkui/dist/components/List/List';
import { FormLayout, FormLayoutGroup, Input, FormStatus, Search, CellButton, Separator, UsersStack, FixedLayout} from '@vkontakte/vkui';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
///Icons
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Search from '@vkontakte/icons/dist/24/search';
import Icon24Info from '@vkontakte/icons/dist/24/info';
import Icon24Education from '@vkontakte/icons/dist/24/education';
import Icon24UserOutgoing from '@vkontakte/icons/dist/24/user_outgoing';
import Icon24User from '@vkontakte/icons/dist/24/user';
import Icon24Newsfeed from '@vkontakte/icons/dist/24/newsfeed';
import Icon24Settings from '@vkontakte/icons/dist/24/settings';
import Icon24MoneyTransfer from '@vkontakte/icons/dist/24/money_transfer';
import Icon24BrowserBack from '@vkontakte/icons/dist/24/browser_back';
import Icon24Market from '@vkontakte/icons/dist/24/market';
import Icon24LogoVk from '@vkontakte/icons/dist/24/logo_vk';
import Icon24Help from '@vkontakte/icons/dist/24/help';
import Icon24Followers from '@vkontakte/icons/dist/24/followers';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import Icon24Services from '@vkontakte/icons/dist/24/services';
import Icon24Write from '@vkontakte/icons/dist/24/write';
import Icon24Note from '@vkontakte/icons/dist/24/note';
import Icon24Video from '@vkontakte/icons/dist/24/video';
import Icon24Gallery from '@vkontakte/icons/dist/24/gallery';
import Icon24Live from '@vkontakte/icons/dist/24/live';
import Icon24Gift from '@vkontakte/icons/dist/24/gift';
import Icon24PlayNext from '@vkontakte/icons/dist/24/play_next';
import Icon24Place from '@vkontakte/icons/dist/24/place';
import Icon24Bug from '@vkontakte/icons/dist/24/bug';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Icon24Poll from '@vkontakte/icons/dist/24/poll';
import user from '@vkontakte/icons/dist/24/user';
import Icon24LikeOutline from '@vkontakte/icons/dist/24/like_outline';
import Icon24Like from '@vkontakte/icons/dist/24/like';
import Icon24ShareOutline from '@vkontakte/icons/dist/24/share_outline';
import Icon56UsersOutline from '@vkontakte/icons/dist/56/users_outline';

class Broadcast extends React.Component{
constructor(props){
super(props);
this.state = {count: '', color: 'rgb(200,200,200)'};
this.onLikes = this.onLikes.bind(this);
}
onLikes(e){
this.setState({count: +1})
this.setState({color: 'rgb(235,0,0)'})
}
render(){
return(
	<Panel id={this.props.id}>
	<PanelHeader left={<HeaderButton onClick={this.props.go} Data-to="Home"><Icon24BrowserBack/></HeaderButton>}>Прямая трансляция</PanelHeader>
    <Group>
    <Gallery slideWidth="100%" align="center" style={{ height: 220 }}><iframe src="https://vk.com/video-187421428_456239051" frameborder="0" controls/></Gallery>
    <Separator style={{margin: '10px 0'}}/>
    <CellButton before={<Icon24Like fill={this.state.color}/>} onClick={this.state.onLikes}>{this.state.count}</CellButton>
    </Group>
</Panel>
);
}
}

Broadcast.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Broadcast;
