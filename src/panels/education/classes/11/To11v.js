import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import bridge from '@vkontakte/vk-bridge'; 
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import InfoRow from '@vkontakte/vkui/dist/components/InfoRow/InfoRow';
import Progress from '@vkontakte/vkui/dist/components/Progress/Progress';
import List from '@vkontakte/vkui/dist/components/List/List';
import { FormLayout, FormLayoutGroup, Input, FormStatus, Search, Separator } from '@vkontakte/vkui';
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
import Icon56FavoriteOutline from '@vkontakte/icons/dist/56/favorite_outline';
import Icon24Help from '@vkontakte/icons/dist/24/help';
import Icon24Services from '@vkontakte/icons/dist/24/services';
import Icon24Note from '@vkontakte/icons/dist/24/note';
import Icon24Live from '@vkontakte/icons/dist/24/live';
import Icon24PlayNext from '@vkontakte/icons/dist/24/play_next';
import Icon24Bug from '@vkontakte/icons/dist/24/bug';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import Icon24Users from '@vkontakte/icons/dist/24/users';
import Icon24ShareOutline from '@vkontakte/icons/dist/24/share_outline';
import Icon24Upload from '@vkontakte/icons/dist/24/upload';
import user from '@vkontakte/icons/dist/24/user';

class To11v extends React.Component {
  constructor(props){
  super(props);
  this.state = {};
  
  this.onChangeShare = this.onChangeShare.bind(this);
  }
  onChangeShare(e){
  bridge.send("VKWebAppShare", {"link": "https://vk.com/app7266393_-187421428"})
  }
  render(){
  return(
	<Panel id={this.props.id}>
	<PanelHeader left={<HeaderButton onClick={this.props.go} Data-to="Timetable"><Icon24BrowserBack/></HeaderButton>}>11 «В» класс</PanelHeader>
  <Group>
  <Div>Понедельник<br/>
  1-ый урок: Нет урока<br/>
  2-ой урок: Нет урока<br/> 
  3-ий урок: Биология<br/> 
  4-ый урок: Информатика (1-я группа)<br/> 
  5-ый урок: Математика<br/>
  6-ой урок: Математика<br/>
  7-ой урок: Физическая культура (зал)
  8-ой урок: </Div>
  <Separator style={{margin: '10px 0'}}/>
  <Div>Вторник<br/>
  1-ый урок: Математика<br/>
  2-ой урок: Право<br/> 
  3-ий урок: Информатика (2-я группа)<br/> 
  4-ый урок: Математика<br/> 
  5-ый урок: Английский язык<br/>
  6-ой урок: Биология<br/>
  7-ой урок: История<br/>
  8-ой урок: Экономика</Div>
  <Separator style={{margin: '10px 0'}}/>
  <Div>Среда<br/>
  1-ый урок: Нет урока<br/>
  2-ой урок: Английский язык<br/> 
  3-ий урок: Математика<br/> 
  4-ый урок: Обществознание<br/> 
  5-ый урок: Право<br/>
  6-ой урок: Литература<br/>
  7-ой урок: Русский язык</Div>
  <Separator style={{margin: '10px 0'}}/>
  <Div>Четверг<br/>
  1-ый урок: Нет урока<br/>
  2-ый урок: Литература<br/> 
  3-ий урок: ЭК Математика<br/> 
  4-ый урок: ОБЖ<br/> 
  5-ый урок: Родной язык<br/>
  6-ой урок: Английский язык<br/>
  7-ой урок: Физика<br/>
  8-ой урок: Химия<br/>
  9-ый урок: Физика</Div>
  <Separator style={{margin: '10px 0'}}/>
  <Div>Пятница<br/>
  1-ый урок: Литература<br/>
  2-ой урок: Основы финансовой<br/>
             грамотности<br/> 
  3-ий урок: Обществознание<br/> 
  4-ый урок: Математика<br/> 
  5-ый урок: Обществознание<br/>
  6-ой урок: История<br/>
  7-ой урок: Физическая культура (зал)</Div>
  <Separator style={{margin: '15px 0'}}/>
  <Cell before={<Icon24ShareOutline/>} onClick={this.onChangeShare}>Поделиться</Cell>
  </Group>
 </Panel>
);
}
}

To11v.propTypes = {
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

export default To11v;
