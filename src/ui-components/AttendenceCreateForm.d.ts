/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AttendenceCreateFormInputValues = {
    phone?: string;
    email?: string;
    paid?: boolean;
};
export declare type AttendenceCreateFormValidationValues = {
    phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    paid?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AttendenceCreateFormOverridesProps = {
    AttendenceCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    paid?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type AttendenceCreateFormProps = React.PropsWithChildren<{
    overrides?: AttendenceCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AttendenceCreateFormInputValues) => AttendenceCreateFormInputValues;
    onSuccess?: (fields: AttendenceCreateFormInputValues) => void;
    onError?: (fields: AttendenceCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AttendenceCreateFormInputValues) => AttendenceCreateFormInputValues;
    onValidate?: AttendenceCreateFormValidationValues;
} & React.CSSProperties>;
export default function AttendenceCreateForm(props: AttendenceCreateFormProps): React.ReactElement;
