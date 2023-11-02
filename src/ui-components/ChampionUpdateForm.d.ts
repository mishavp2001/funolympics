/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Champion } from "../models";
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
export declare type ChampionUpdateFormInputValues = {
    name?: string;
    address?: string;
    records?: string[];
    phone?: string;
    summary?: string;
    img?: string;
};
export declare type ChampionUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    records?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    summary?: ValidationFunction<string>;
    img?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChampionUpdateFormOverridesProps = {
    ChampionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    records?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    summary?: PrimitiveOverrideProps<TextFieldProps>;
    img?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ChampionUpdateFormProps = React.PropsWithChildren<{
    overrides?: ChampionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    champion?: Champion;
    onSubmit?: (fields: ChampionUpdateFormInputValues) => ChampionUpdateFormInputValues;
    onSuccess?: (fields: ChampionUpdateFormInputValues) => void;
    onError?: (fields: ChampionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ChampionUpdateFormInputValues) => ChampionUpdateFormInputValues;
    onValidate?: ChampionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ChampionUpdateForm(props: ChampionUpdateFormProps): React.ReactElement;
