import {AppMaskedInputProps} from '../../common/AppMaskedInput/type';
import {ValidateResult} from 'react-hook-form/dist/types/validator';

export type AppMaskedFormInputProps = {
  fieldName: string;
} & AppMaskedInputProps;
