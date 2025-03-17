import React, {createRef, memo, useCallback} from 'react';
import {View} from 'react-native';

import {FormProvider, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';
import type {
  AppDynamicFormCheckboxFieldModel,
  AppDynamicFormDateFieldModel,
  AppDynamicFormFieldModelBase,
  AppDynamicFormPasswordFieldModel,
  AppDynamicFormProps,
  AppDynamicFormSelectBoxFieldModel,
  AppDynamicFormTextFieldModel,
} from './type';
import AppFormCheckbox from '../../form/AppFormCheckbox';
import AppFormSelectbox from '../../form/AppFormSelectbox';
import AppFormInput from '../../form/AppFormInput';
import AppFormMaskedInput from '../../form/AppFormMaskedInput';
import AppFormInputDatePicker from '../../form/AppFormInputDatePicker';
import AppButton from '../AppButton';
import AppText from '../AppText';
import {useEffect} from 'react';
import {Masks} from 'react-native-mask-input';

const AppDynamicForm = (props: AppDynamicFormProps) => {
  const {editable = true, fields = []} = props;
  const {t} = useTranslation();

  const generateDefaultValues = () => {
    let formData = {};
    fields
      ?.filter?.(nq => nq.value)
      .forEach?.(item => {
        formData = {
          ...formData,
          [item.name]: item.value,
        };
      });
    return formData;
  };

  const {...methods} = useForm({
    defaultValues: generateDefaultValues(),
    reValidateMode: 'onChange',
    mode: 'onTouched',
  });

  useEffect(() => {
    const subscription = methods.watch((value, {name, type}) => {
      if (props?.watchForm) {
        props.watchForm(value);
      }
    });
    return () => subscription.unsubscribe();
  }, [methods]);

  useEffect(() => {
    if (props?.resetData) {
      methods.reset({...methods?.getValues(), ...props?.resetData});
    }
  }, [props?.resetData]);

  const renderFieldContent = (field: AppDynamicFormFieldModelBase | AppDynamicFormPasswordFieldModel | AppDynamicFormDateFieldModel) => {
    switch (field.type) {
      case 'checkbox': {
        const fieldData = field as AppDynamicFormCheckboxFieldModel;
        return (
          <AppFormCheckbox
            {...fieldData}
            checked={field.value as boolean}
            disabled={!editable}
            fieldName={field.name}
            required={field.required !== undefined ? field.required : true}
            requiredMessage={field.requiredMessage ?? t('validation.requiredError').toString()}
            text={field.title}
          />
        );
      }
      case 'date-picker': {
        const fieldData = field as AppDynamicFormDateFieldModel;
        return (
          <AppFormInputDatePicker
            editable={editable}
            fieldName={fieldData.name}
            label={fieldData.title}
            required={fieldData.required !== undefined ? fieldData.required : true}
            requiredMessage={fieldData.requiredMessage ?? t('validation.requiredError').toString()}
            minDate={fieldData.minDate}
            maxDate={fieldData.maxDate}
          />
        );
      }
      case 'select-box': {
        const fieldData = field as AppDynamicFormSelectBoxFieldModel;
        return (
          <AppFormSelectbox
            {...fieldData}
            fieldName={fieldData.name}
            editable={fieldData.editable}
            label={fieldData.title}
            headerTitle={fieldData.title}
            options={fieldData.options}
            displayProp={fieldData.displayProp}
            name={fieldData.name}
            value={fieldData.value}
            required={field.required !== undefined ? field.required : true}
            requiredMessage={field.requiredMessage ?? t('validation.requiredError').toString()}
          />
        );
      }
      case 'password': {
        const fieldData = field as AppDynamicFormPasswordFieldModel;
        return (
          <AppFormInput
            editable={editable}
            fieldName={fieldData.name}
            label={fieldData.title}
            multiline={fieldData.multiLine}
            keyboardType={fieldData.dataType === 'number' ? 'numeric' : 'default'}
            textFormat="password"
            autoCapitalize="none"
            autoCorrect={false}
            required={fieldData.required !== undefined ? fieldData.required : true}
            requiredMessage={fieldData.requiredMessage ?? t('validation.requiredError').toString()}
            pattern={fieldData.pattern}
            patternMessage={fieldData.patternMessage}
            minLength={fieldData.minLength}
            minLengthMessage={fieldData.minLengthMessage}
            maxLength={fieldData.maxLength}
            maxLengthMessage={fieldData.maxLengthMessage}
            numericMin={fieldData.numericMin}
            numericMinMessage={fieldData.numericMinMessage}
            numericMax={fieldData.numericMax}
            numericMaxMessage={fieldData.numericMaxMessage}
          />
        );
      }
      case 'email': {
        return (
          <AppFormInput
            editable={editable}
            fieldName={field.name}
            label={field.title}
            textFormat="email"
            autoComplete={'email'}
            autoCapitalize="none"
            autoCorrect={false}
            required={field.required !== undefined ? field.required : true}
            requiredMessage={field.requiredMessage ?? t('validation.requiredError').toString()}
          />
        );
      }
      case 'phone': {
        return (
          <AppFormMaskedInput
            editable={editable}
            fieldName={field.name}
            label={field.title}
            mask={Masks.USA_PHONE}
            required={field.required !== undefined ? field.required : true}
            requiredMessage={field.requiredMessage ?? t('validation.requiredError').toString()}
          />
        );
      }
      default: {
        const fieldData = field as AppDynamicFormTextFieldModel;
        return (
          <AppFormInput
            editable={editable}
            fieldName={fieldData.name}
            label={fieldData.title}
            multiline={fieldData.multiLine}
            keyboardType={fieldData.dataType === 'number' ? 'numeric' : 'default'}
            autoCapitalize={'words'}
            autoCorrect={true}
            required={fieldData.required !== undefined ? fieldData.required : true}
            requiredMessage={fieldData.requiredMessage ?? t('validation.requiredError').toString()}
            pattern={fieldData.pattern}
            patternMessage={fieldData.patternMessage}
            minLength={fieldData.minLength}
            minLengthMessage={fieldData.minLengthMessage}
            maxLength={fieldData.maxLength}
            maxLengthMessage={fieldData.maxLengthMessage}
            numericMin={fieldData.numericMin}
            numericMinMessage={fieldData.numericMinMessage}
            numericMax={fieldData.numericMax}
            numericMaxMessage={fieldData.numericMaxMessage}
          />
        );
      }
    }
  };

  const renderFields = () => {
    return fields
      ?.sort?.((a, b) => (a.index ?? 0) - (b.index ?? 0))
      .map?.((item, index) => {
        return (
          <View key={`${index + 1}_field_line`} style={styles.fieldLine}>
            {renderFieldContent(item)}
          </View>
        );
      });
  };

  const handleSubmitForm = useCallback((data: object) => {
    props.onSubmit?.(data);
  }, []);

  return (
    <KeyboardAwareScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={styles.scrollContainer} keyboardShouldPersistTaps="handled">
      <FormProvider {...methods}>
        <View style={[styles.formContainer, props.style]}>
          {props.title && props.title?.length > 0 && <AppText style={styles.formTitle}>{props.title}</AppText>}
          {renderFields()}
        </View>
        {!props.hideSubmitButton && <AppButton style={styles.submitButton} text={t('submit').toString()} onPress={methods.handleSubmit(handleSubmitForm) as never} />}
      </FormProvider>
    </KeyboardAwareScrollView>
  );
};

export default memo(AppDynamicForm);
