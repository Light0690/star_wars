import UIVideo from "./UIVideo";
import video from './video/video.mp4';

export default {
    title : 'Ui-Kit/UIVideo',
    component: UIVideo
}

const Template = (args) => <UIVideo {...args} />


const props = {
    src : video,
    classes : '',
    playbackRate : 1,
}

export const Default = Template.bind({});

Default.args = {
    ...props
};
