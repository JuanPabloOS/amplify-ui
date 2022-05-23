import { MessageComponentBaseProps } from '@aws-amplify/ui-react-core';
import { DeviceOrientation } from '../../../hooks';
import {
  MessageComponentStyles,
  MessageOverrideStyle,
  UseMessageProps,
} from '../../hooks';
export interface LayoutProps
  extends MessageComponentBaseProps<MessageOverrideStyle>,
    Omit<UseMessageProps, 'shouldRenderMessage' | 'styles'> {
  orientation: DeviceOrientation;
  styles: Omit<MessageComponentStyles, 'wrapper'>;
}
