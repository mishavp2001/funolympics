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
export declare type ChampionTestInputValues = {
    name?: string;
    address?: string;
    records?: string[];
    phone?: string;
    summary?: string;
};
export declare type ChampionTestValidationValues = {
    name?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    records?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    summary?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChampionTestOverridesProps = {
    ChampionTestGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    records?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    summary?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ChampionTestProps = React.PropsWithChildren<{
    overrides?: ChampionTestOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ChampionTestInputValues) => ChampionTestInputValues;
    onSuccess?: (fields: ChampionTestInputValues) => void;
    onError?: (fields: ChampionTestInputValues, errorMessage: string) => void;
    onChange?: (fields: ChampionTestInputValues) => ChampionTestInputValues;
    onValidate?: ChampionTestValidationValues;
} & React.CSSProperties>;
export default function ChampionTest(props: ChampionTestProps): React.ReactElement;
