/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SelectField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { Game } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function GameUpdateForm(props) {
  const {
    id: idProp,
    game: gameModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    summary: "",
    tags: [],
    rules: [],
    examples: [],
    likes: "",
  };
  const [summary, setSummary] = React.useState(initialValues.summary);
  const [tags, setTags] = React.useState(initialValues.tags);
  const [rules, setRules] = React.useState(initialValues.rules);
  const [examples, setExamples] = React.useState(initialValues.examples);
  const [likes, setLikes] = React.useState(initialValues.likes);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = gameRecord
      ? { ...initialValues, ...gameRecord }
      : initialValues;
    setSummary(cleanValues.summary);
    setTags(cleanValues.tags ?? []);
    setCurrentTagsValue("");
    setRules(cleanValues.rules ?? []);
    setCurrentRulesValue("");
    setExamples(cleanValues.examples ?? []);
    setCurrentExamplesValue("");
    setLikes(cleanValues.likes);
    setErrors({});
  };
  const [gameRecord, setGameRecord] = React.useState(gameModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Game, idProp)
        : gameModelProp;
      setGameRecord(record);
    };
    queryData();
  }, [idProp, gameModelProp]);
  React.useEffect(resetStateValues, [gameRecord]);
  const [currentTagsValue, setCurrentTagsValue] = React.useState("");
  const tagsRef = React.createRef();
  const [currentRulesValue, setCurrentRulesValue] = React.useState("");
  const rulesRef = React.createRef();
  const [currentExamplesValue, setCurrentExamplesValue] = React.useState("");
  const examplesRef = React.createRef();
  const getDisplayValue = {
    tags: (r) => {
      const enumDisplayValueMap = {
        SOCCER: "Soccer",
        BASKETBALL: "Basketball",
        VOLLEYBALL: "Volleyball",
        FOOTBALL: "Football",
        RUNNING: "Running",
      };
      return enumDisplayValueMap[r];
    },
  };
  const validations = {
    summary: [],
    tags: [{ type: "Required" }],
    rules: [{ type: "Required" }],
    examples: [],
    likes: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          summary,
          tags,
          rules,
          examples,
          likes,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            Game.copyOf(gameRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "GameUpdateForm")}
      {...rest}
    >
      <TextField
        label="Summary"
        isRequired={false}
        isReadOnly={false}
        value={summary}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              summary: value,
              tags,
              rules,
              examples,
              likes,
            };
            const result = onChange(modelFields);
            value = result?.summary ?? value;
          }
          if (errors.summary?.hasError) {
            runValidationTasks("summary", value);
          }
          setSummary(value);
        }}
        onBlur={() => runValidationTasks("summary", summary)}
        errorMessage={errors.summary?.errorMessage}
        hasError={errors.summary?.hasError}
        {...getOverrideProps(overrides, "summary")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              summary,
              tags: values,
              rules,
              examples,
              likes,
            };
            const result = onChange(modelFields);
            values = result?.tags ?? values;
          }
          setTags(values);
          setCurrentTagsValue("");
        }}
        currentFieldValue={currentTagsValue}
        label={"Tags"}
        items={tags}
        hasError={errors?.tags?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("tags", currentTagsValue)
        }
        errorMessage={errors?.tags?.errorMessage}
        getBadgeText={getDisplayValue.tags}
        setFieldValue={setCurrentTagsValue}
        inputFieldRef={tagsRef}
        defaultFieldValue={""}
      >
        <SelectField
          label="Tags"
          placeholder="Please select an option"
          isDisabled={false}
          value={currentTagsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.tags?.hasError) {
              runValidationTasks("tags", value);
            }
            setCurrentTagsValue(value);
          }}
          onBlur={() => runValidationTasks("tags", currentTagsValue)}
          errorMessage={errors.tags?.errorMessage}
          hasError={errors.tags?.hasError}
          ref={tagsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "tags")}
        >
          <option
            children="Soccer"
            value="SOCCER"
            {...getOverrideProps(overrides, "tagsoption0")}
          ></option>
          <option
            children="Basketball"
            value="BASKETBALL"
            {...getOverrideProps(overrides, "tagsoption1")}
          ></option>
          <option
            children="Volleyball"
            value="VOLLEYBALL"
            {...getOverrideProps(overrides, "tagsoption2")}
          ></option>
          <option
            children="Football"
            value="FOOTBALL"
            {...getOverrideProps(overrides, "tagsoption3")}
          ></option>
          <option
            children="Running"
            value="RUNNING"
            {...getOverrideProps(overrides, "tagsoption4")}
          ></option>
        </SelectField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              summary,
              tags,
              rules: values,
              examples,
              likes,
            };
            const result = onChange(modelFields);
            values = result?.rules ?? values;
          }
          setRules(values);
          setCurrentRulesValue("");
        }}
        currentFieldValue={currentRulesValue}
        label={"Rules"}
        items={rules}
        hasError={errors?.rules?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("rules", currentRulesValue)
        }
        errorMessage={errors?.rules?.errorMessage}
        setFieldValue={setCurrentRulesValue}
        inputFieldRef={rulesRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Rules"
          isRequired={true}
          isReadOnly={false}
          value={currentRulesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.rules?.hasError) {
              runValidationTasks("rules", value);
            }
            setCurrentRulesValue(value);
          }}
          onBlur={() => runValidationTasks("rules", currentRulesValue)}
          errorMessage={errors.rules?.errorMessage}
          hasError={errors.rules?.hasError}
          ref={rulesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "rules")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              summary,
              tags,
              rules,
              examples: values,
              likes,
            };
            const result = onChange(modelFields);
            values = result?.examples ?? values;
          }
          setExamples(values);
          setCurrentExamplesValue("");
        }}
        currentFieldValue={currentExamplesValue}
        label={"Examples"}
        items={examples}
        hasError={errors?.examples?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("examples", currentExamplesValue)
        }
        errorMessage={errors?.examples?.errorMessage}
        setFieldValue={setCurrentExamplesValue}
        inputFieldRef={examplesRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Examples"
          isRequired={false}
          isReadOnly={false}
          value={currentExamplesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.examples?.hasError) {
              runValidationTasks("examples", value);
            }
            setCurrentExamplesValue(value);
          }}
          onBlur={() => runValidationTasks("examples", currentExamplesValue)}
          errorMessage={errors.examples?.errorMessage}
          hasError={errors.examples?.hasError}
          ref={examplesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "examples")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Likes"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={likes}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              summary,
              tags,
              rules,
              examples,
              likes: value,
            };
            const result = onChange(modelFields);
            value = result?.likes ?? value;
          }
          if (errors.likes?.hasError) {
            runValidationTasks("likes", value);
          }
          setLikes(value);
        }}
        onBlur={() => runValidationTasks("likes", likes)}
        errorMessage={errors.likes?.errorMessage}
        hasError={errors.likes?.hasError}
        {...getOverrideProps(overrides, "likes")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || gameModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || gameModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
