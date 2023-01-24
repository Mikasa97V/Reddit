import {BlockIcon} from "./BlockIcon";
import {CommentsIcon} from "./CommentsIcon";
import {SaveIcon} from "./SaveIcon";
import {ShareIcon} from "./ShareIcon";
import {WarningIcon} from "./WarningIcon";
import {MenuIcon} from "./MenuIcon";
import {AccountAnonymousIcon} from "./AccountAnonymousIcon";
import {CloseButton} from "./CloseButton";
import {LeftAndRightArrowsIcon} from "./FormIcons/LeftAndRightArrowsIcon";
import {AIcon} from "./FormIcons/AIcon";
import {ConnectIcon} from "./FormIcons/ConnectIcon";
import {DialogIcon} from "./FormIcons/DialogIcon";
import {DocumentIcon} from "./FormIcons/DocumentIcon";
import {DownloadIcon} from "./FormIcons/DownloadIcon";
import {EditIcon} from "./FormIcons/EditIcon";
import {PDFDocumentIcon} from "./FormIcons/PDFDocumentIcon";
import {PersonPictureIcon} from "./FormIcons/PersonPictureIcon";
import {PictureIcon} from "./FormIcons/PictureIcon";
import {RoundArrowsIcon} from "./FormIcons/RoundArrowsIcon";
import {VoiceCameraIcon} from "./FormIcons/VoiceCameraIcon";

export enum EIcons {
    block,
    comments,
    save,
    share,
    warning,
    menu,
    accountAnonymous,
    closeButton,
    leftAndRightArrows,
    aIcon,
    connectIcon,
    dialog,
    documentIcon,
    download,
    editIcon,
    pdfDocument,
    personPicture,
    pictureIcon,
    roundArrows,
    voiceCamera,
}

export const icons: any = {
    [EIcons.block]: BlockIcon(),
    [EIcons.comments]: CommentsIcon(),
    [EIcons.save]: SaveIcon(),
    [EIcons.share]: ShareIcon(),
    [EIcons.warning]: WarningIcon(),
    [EIcons.menu]: MenuIcon(),
    [EIcons.accountAnonymous]: AccountAnonymousIcon(),
    [EIcons.closeButton]: CloseButton(),
    [EIcons.leftAndRightArrows]: LeftAndRightArrowsIcon(),
    [EIcons.aIcon]: AIcon(),
    [EIcons.connectIcon]: ConnectIcon(),
    [EIcons.dialog]: DialogIcon(),
    [EIcons.documentIcon]: DocumentIcon(),
    [EIcons.download]: DownloadIcon(),
    [EIcons.editIcon]: EditIcon(),
    [EIcons.pdfDocument]: PDFDocumentIcon(),
    [EIcons.personPicture]: PersonPictureIcon(),
    [EIcons.pictureIcon]: PictureIcon(),
    [EIcons.roundArrows]: RoundArrowsIcon(),
    [EIcons.voiceCamera]: VoiceCameraIcon(),

}
