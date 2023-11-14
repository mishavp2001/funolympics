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
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { StorageManager } from '@aws-amplify/ui-react-storage';


import awsExports from "../aws-exports";
import { Champion } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore, Storage } from 'aws-amplify';
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
export default function ChampionCreateForm(props) {
  const [imgS3, setImgS3] = React.useState('');
  const onImgSuccess = ({ key }) => {
    setImgS3(key);
  };
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    address: "",
    records: [],
    phone: "",
    summary: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [address, setAddress] = React.useState(initialValues.address);
  const [records, setRecords] = React.useState(initialValues.records);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [summary, setSummary] = React.useState(initialValues.summary);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setAddress(initialValues.address);
    setRecords(initialValues.records);
    setCurrentRecordsValue("");
    setPhone(initialValues.phone);
    setSummary(initialValues.summary);
    setErrors({});
  };
  const [currentRecordsValue, setCurrentRecordsValue] = React.useState("");
  const recordsRef = React.createRef();
  const validations = {
    name: [{ type: "Required" }],
    address: [],
    records: [],
    phone: [{ type: "Phone" }],
    summary: [],
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
  
    const processFile = async ({ file }) => {
      const fileExtension = file.name.split('.').pop();
    
      return file
        .arrayBuffer()
        .then((filebuffer) => window.crypto.subtle.digest('SHA-1', filebuffer))
        .then((hashBuffer) => {
          const hashArray = Array.from(new Uint8Array(hashBuffer));
          const hashHex = hashArray
            .map((a) => a.toString(16).padStart(2, '0'))
            .join('');
          return { file, key: `${hashHex}.${fileExtension}` };
        });
    };
  const addImage = async (resp, id) => {
      console.log(id);
      try {
          console.log(resp, id);
          //Storage.put(
          //    `${image.name.split('.')[0]}-${resp.name}.${image.name.split('.').pop()}`,
          //    image)
              //.then(async (storageRes) => {
                  const original = await DataStore.query(Champion, id);

                  await DataStore.save(
                      Champion.copyOf(original, updated => {
                        updated.imgS3 = {
                          bucket: awsExports.aws_user_files_s3_bucket,
                          region: awsExports.aws_user_files_s3_bucket_region,
                          // bucket: 'funolympicse0ffa61b199e42ef8e991c0c61c9b0cc184325-dev',
                          // region: 'us-west-1',
                          key: imgS3
                        };
                      })
                  )
                   // );
                  //})
      } catch (error) {
          console.log(error);
      }
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
          name,
          address,
          records,
          phone,
          summary,
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

          const Data = await DataStore.save(new Champion(modelFields));
          
          ///const Data = await DataStore.save(new Champion(modelFields));
          if (onSuccess) {
            await addImage(modelFields, Data.id)
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ChampionCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              address,
              records,
              phone,
              summary,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              address: value,
              records,
              phone,
              summary,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              address,
              records: values,
              phone,
              summary,
            };
            const result = onChange(modelFields);
            values = result?.records ?? values;
          }
          setRecords(values);
          setCurrentRecordsValue("");
        }}
        currentFieldValue={currentRecordsValue}
        label={"Records"}
        items={records}
        hasError={errors?.records?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("records", currentRecordsValue)
        }
        errorMessage={errors?.records?.errorMessage}
        setFieldValue={setCurrentRecordsValue}
        inputFieldRef={recordsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Records"
          isRequired={false}
          isReadOnly={false}
          value={currentRecordsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.records?.hasError) {
              runValidationTasks("records", value);
            }
            setCurrentRecordsValue(value);
          }}
          onBlur={() => runValidationTasks("records", currentRecordsValue)}
          errorMessage={errors.records?.errorMessage}
          hasError={errors.records?.hasError}
          ref={recordsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "records")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              address,
              records,
              phone: value,
              summary,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <TextField
        label="Summary"
        isRequired={false}
        isReadOnly={false}
        value={summary}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              address,
              records,
              phone,
              summary: value,
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
      {/* <input type="file" name="imgS3" accept="image/*" onChange={onImageChange} /> */}
      
      <>
      <StorageManager
        shouldAutoProceed={true}
        onUploadSuccess={onImgSuccess}
        maxFileCount={1}
        maxSize={100000}
        variation="drop"
        acceptedFileTypes={['image/*', 'video/*']}
        accessLevel="public"
        showImages
        processFile={processFile}
      />
      {imgS3}
      </>
      
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}


