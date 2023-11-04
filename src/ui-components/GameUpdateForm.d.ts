/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Game } from "../models";
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
export declare type GameUpdateFormInputValues = {
    summary?: string;
    tags?: string[];
    rules?: string[];
    examples?: string[];
    likes?: number;
};
export declare type GameUpdateFormValidationValues = {
    summary?: ValidationFunction<string>;
    tags?: ValidationFunction<string>;
    rules?: ValidationFunction<string>;
    examples?: ValidationFunction<string>;
    likes?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GameUpdateFormOverridesProps = {
    GameUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    summary?: PrimitiveOverrideProps<TextFieldProps>;
    tags?: PrimitiveOverrideProps<SelectFieldProps>;
    rules?: PrimitiveOverrideProps<TextFieldProps>;
    examples?: PrimitiveOverrideProps<TextFieldProps>;
    likes?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GameUpdateFormProps = React.PropsWithChildren<{
    overrides?: GameUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    game?: Game;
    onSubmit?: (fields: GameUpdateFormInputValues) => GameUpdateFormInputValues;
    onSuccess?: (fields: GameUpdateFormInputValues) => void;
    onError?: (fields: GameUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GameUpdateFormInputValues) => GameUpdateFormInputValues;
    onValidate?: GameUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GameUpdateForm(props: GameUpdateFormProps): React.ReactElement;
