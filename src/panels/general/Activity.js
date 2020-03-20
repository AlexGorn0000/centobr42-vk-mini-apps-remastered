import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import connect from '@vkontakte/vk-connect'; 
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import InfoRow from '@vkontakte/vkui/dist/components/InfoRow/InfoRow';
import Progress from '@vkontakte/vkui/dist/components/Progress/Progress';
import List from '@vkontakte/vkui/dist/components/List/List';
import * as VKUI from '@vkontakte/vkui';
import { HeaderButton } from '@vkontakte/vkui';
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
import Icon56FavoriteOutline from '@vkontakte/icons/dist/56/favorite_outline';
import Icon24Help from '@vkontakte/icons/dist/24/help';
import Icon24Services from '@vkontakte/icons/dist/24/services';
import Icon24Live from '@vkontakte/icons/dist/24/live';
import Icon24PlayNext from '@vkontakte/icons/dist/24/play_next';
import Icon24Bug from '@vkontakte/icons/dist/24/bug';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import user from '@vkontakte/icons/dist/24/user';
import Icon24Up from '@vkontakte/icons/dist/24/up';
import Icon28Story from '@vkontakte/icons/dist/28/story';
import Icon24LikeOutline from '@vkontakte/icons/dist/24/like_outline';
import Icon24Like from '@vkontakte/icons/dist/24/like';
import Icon24MoreHorizontal from '@vkontakte/icons/dist/24/more_horizontal';
import { render } from 'react-dom';

const itemStyle = {
    flexShrink: 0,
    width: 80,
    height: 94,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 12
  };

  class Activity extends React.Component {
    constructor(props) {
      super(props);
    this.state = {showContext1: '', hideContext1: false};
    this.showContext1 = this.showContext1.bind(this);
}
showContext1(e){
this.setState({openContext1: 'Прошло достаточно много времени с тех пор, как появилось ученическое объединение в Центре образования №42. За это время, наши активисты, не остались не замечеными. Они с большим трудом привлекали аудиторию, проводили мероприятия, проявили свой талант и упорное стремление к цели. Мы считаем, что они достойны быть на доске почета.'});
this.setState({hideContext1: true});
}
hideContext1(e){
this.setState({openContext1: ''});
this.setState({hideContext1: false});
}

render() {
return (
<Panel id={this.props.id}>
		<PanelHeader left={<HeaderButton onClick={this.props.go} Data-to="Home"><Icon24BrowserBack/></HeaderButton>}>Доска почета</PanelHeader>
		<img width="100%" height="100%" src="https://sun9-12.userapi.com/c857320/v857320206/cddd5/ItRmQjAxakE.jpg"></img>
</Panel>
);
}
}

Activity.propTypes = {
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

export default Activity;
