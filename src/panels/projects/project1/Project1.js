import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import connect from '@vkontakte/vk-connect'; 
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Gallery from '@vkontakte/vkui/dist/components/Gallery/Gallery';
import InfoRow from '@vkontakte/vkui/dist/components/InfoRow/InfoRow';
import Progress from '@vkontakte/vkui/dist/components/Progress/Progress';
import List from '@vkontakte/vkui/dist/components/List/List';
import { FormLayout, FormLayoutGroup, Input, FormStatus, Search, CellButton, Separator } from '@vkontakte/vkui';
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


const Project1 = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader left={<HeaderButton onClick={go} Data-to="Projects"><Icon24BrowserBack/></HeaderButton>}>Конкурс "Один в один"</PanelHeader>
    <Group>
    <Gallery
    slideWidth="100%"
    align="center"
    style={{ height: 200 }}>
				        <img src="https://sun9-3.userapi.com/c855416/v855416853/1a4f0c/YB36punuuwQ.jpg"/>
                <img src="https://sun9-32.userapi.com/c204616/v204616763/16a5b/QXGt8DwB240.jpg"/>
                <img src="https://sun9-25.userapi.com/c204616/v204616763/16ac7/aOEhtTmFBv8.jpg"/>
                <img src="https://sun9-72.userapi.com/c204616/v204616763/16ad9/DhhtGPRzkHE.jpg"/>
                <img src="https://sun9-41.userapi.com/c204616/v204616763/16ae2/f2LLX776jy4.jpg"/>
                <img src="https://sun9-29.userapi.com/c204616/v204616763/16b06/SDqGTlL0wUI.jpg"/>
                <img src="https://sun9-22.userapi.com/c204616/v204616763/16b57/O3EJnRxTzpY.jpg"/>
                <img src="https://sun9-127.userapi.com/c204616/v204616763/16bb1/qeRW7sb4bxI.jpg"/>
                <img src="https://sun9-32.userapi.com/c204616/v204616763/16ba8/7BHvHwLdJYM.jpg"/>
                <img src="https://sun9-15.userapi.com/c204616/v204616763/16d85/S2a4fiOLdtc.jpg"/>
                <img src="https://sun9-19.userapi.com/c204616/v204616763/16c14/LhG-kv9beG4.jpg"/>
                <img src="https://sun9-26.userapi.com/c204616/v204616763/16bd5/C_RpWtVM7N0.jpg"/>
    </Gallery>
    </Group>
    <Group>
    <Cell before={<Icon24Followers/>}>Дата проведения</Cell>
    <Div>
    <InfoRow>Первый этап: с 25 по 29 ноября</InfoRow>
    </Div>
    <Div>
    <InfoRow>Второй этап (финал): 16 декабря</InfoRow>
    </Div>
    <Separator style={{ margin: '5px 0' }} />
    <Cell before={<Icon24Place/>}>Место проведения</Cell>
    <Div>
    <InfoRow>Россия, Вологодская обл, г.Вологда, ул.Северная, д.34А</InfoRow>
    </Div>
    </Group>
    <Group title="Дополнительно">
    <Separator style={{ margin: '5px 0' }} />
    <List>
    <Cell expandable before={<Icon24Poll/>} onClick={go} Data-to="PJ1Poll">Статистика</Cell>
    <Cell expandable before={<Icon24Video/>} onClick={go} Data-to="PJ1Video">Видеозаписи</Cell>
    <Cell expandable before={<Icon24Gallery/>} onClick={go} Data-to="PJ1Photo">Фотографии</Cell>
    </List>
    </Group>
    <Group>
  	<List>
	  <Cell expandable before={<Icon24LogoVk />} href="https://vk.com/centobr42_press_center">Наша группа</Cell>
	 </List>
	 </Group>
 </Panel>
);

Project1.propTypes = {
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

export default Project1;
