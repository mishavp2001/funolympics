/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ChampionCreateFormInputValues = {
    name?: string;
    address?: string;
    records?: string[];
    phone?: string;
    summary?: string;
    img?: string;
};
export declare type ChampionCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    records?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    summary?: ValidationFunction<string>;
    img?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChampionCreateFormOverridesProps = {
    ChampionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    records?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    summary?: PrimitiveOverrideProps<TextFieldProps>;
    img?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ChampionCreateFormProps = React.PropsWithChildren<{
    overrides?: ChampionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ChampionCreateFormInputValues) => ChampionCreateFormInputValues;
    onSuccess?: (fields: ChampionCreateFormInputValues) => void;
    onError?: (fields: ChampionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ChampionCreateFormInputValues) => ChampionCreateFormInputValues;
    onValidate?: ChampionCreateFormValidationValues;
} & React.CSSProperties>;
export default function ChampionCreateForm(props: ChampionCreateFormProps): React.ReactElement;
