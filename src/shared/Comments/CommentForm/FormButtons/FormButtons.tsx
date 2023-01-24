import React from 'react';
import styles from './formbuttons.css';
import {Icon} from "../../../Icon";
import {EIcons} from "../../../Icon/Icons";

export function FormButtons() {
  return (
      <div className={styles.actionButtons}>
        <Icon icon={EIcons.leftAndRightArrows} width={20} height={12}/>
        <Icon icon={EIcons.pictureIcon} width={18} height={18}/>
        <Icon icon={EIcons.documentIcon} width={16} height={20}/>
        <Icon icon={EIcons.download} width={14} height={17}/>
        <Icon icon={EIcons.personPicture} width={18} height={18}/>
        <Icon icon={EIcons.roundArrows} width={22} height={16}/>
        <Icon icon={EIcons.connectIcon} width={20} height={10}/>
        <Icon icon={EIcons.voiceCamera} width={20} height={18}/>
        <Icon icon={EIcons.dialog} width={20} height={20}/>
        <Icon icon={EIcons.editIcon} width={18} height={18}/>
        <Icon icon={EIcons.aIcon} width={16} height={18}/>
        <Icon icon={EIcons.pdfDocument} width={20} height={20}/>
      </div>
  );
}
