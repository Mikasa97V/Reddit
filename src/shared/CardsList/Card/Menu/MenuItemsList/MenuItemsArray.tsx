import React from "react";
import {EDivider, EScreen} from "./MenuItem";
import {Icon} from "../../../../Icon";
import {EIcons} from "../../../../Icon/Icons";

const indentationMargin = '0 6px 0 0';

export const MenuItemsArray = [
    {
        text: 'Комментарии',
        icon: <Icon icon={EIcons.comments} margin={indentationMargin}/>,
        showOn: EScreen.desktop,
    },
    {
        text: 'Поделиться',
        icon: <Icon icon={EIcons.share} margin={indentationMargin}/>,
        showOn: EScreen.desktop,
    },
    {
        text: 'Скрыть',
        icon: <Icon icon={EIcons.block} margin={indentationMargin}/>,
        showOn: EScreen.allScreen,
    },
    {
        text: 'Сохранить',
        icon: <Icon icon={EIcons.save} margin={indentationMargin}/>,
        showOn: EScreen.desktop,
    },
    {
        text: 'Пожаловаться',
        icon: <Icon icon={EIcons.warning} margin={indentationMargin}/>,
        showOn: EScreen.allScreen,
        hideDivider: EDivider.hideDivider,
    },
]
