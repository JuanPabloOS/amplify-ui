import * as React from 'react';
import classNames from 'classnames';

import { ComponentClassNames } from '../shared/constants';
import { DialCodeSelect } from './DialCodeSelect';
import { PhoneNumberFieldProps, Primitive } from '../types';
import { ComponentText } from '../shared/constants';
import { TextField } from '../TextField';

const PhoneNumberFieldPrimitive: Primitive<PhoneNumberFieldProps, 'input'> = (
  {
    autoComplete = 'tel-national',
    className,
    defaultDialCode,
    dialCodeLabel = ComponentText.PhoneNumberField.dialCodeLabel,
    dialCodeList,
    dialCodeName,
    dialCodeRef,
    hasError,
    isDisabled,
    isReadOnly,
    onDialCodeChange,
    onInput,
    size,
    type,
    variation,
    ...rest
  },
  ref
) => {
  return (
    <TextField
      outerStartComponent={
        <DialCodeSelect
          defaultValue={defaultDialCode}
          dialCodeList={dialCodeList}
          className={className}
          hasError={hasError}
          isDisabled={isDisabled}
          isReadOnly={isReadOnly}
          label={dialCodeLabel}
          name={dialCodeName}
          onChange={onDialCodeChange}
          ref={dialCodeRef}
          size={size}
          variation={variation}
        />
      }
      autoComplete={autoComplete}
      className={classNames(ComponentClassNames.PhoneNumberField, className)}
      hasError={hasError}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      isMultiline={false}
      onInput={onInput}
      ref={ref}
      size={size}
      type="tel"
      variation={variation}
      {...rest}
    />
  );
};

/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/phonenumberfield)
 */
export const PhoneNumberField = React.forwardRef(PhoneNumberFieldPrimitive);

PhoneNumberField.displayName = 'PhoneNumberField';
