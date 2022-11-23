import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  money: any;
  timestamptz: any;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type DateComparisonExp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** columns and relationships of "insurances" */
export type Insurances = {
  __typename?: 'Insurances';
  createdAt: Scalars['timestamptz'];
  endDate: Scalars['date'];
  firstInstallment?: Maybe<Scalars['money']>;
  id: Scalars['Int'];
  price?: Maybe<Scalars['money']>;
  reactivationDate?: Maybe<Scalars['date']>;
  secondInstallment?: Maybe<Scalars['money']>;
  startDate: Scalars['date'];
  suspensionDate?: Maybe<Scalars['date']>;
  title: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  vehicleId: Scalars['Int'];
  /** An object relationship */
  vehicleOfInsurance?: Maybe<Vehicles>;
};

/** aggregated selection of "insurances" */
export type InsurancesAggregate = {
  __typename?: 'InsurancesAggregate';
  aggregate?: Maybe<InsurancesAggregateFields>;
  nodes: Array<Insurances>;
};

/** aggregate fields of "insurances" */
export type InsurancesAggregateFields = {
  __typename?: 'InsurancesAggregateFields';
  avg?: Maybe<InsurancesAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<InsurancesMaxFields>;
  min?: Maybe<InsurancesMinFields>;
  stddev?: Maybe<InsurancesStddevFields>;
  stddevPop?: Maybe<InsurancesStddev_PopFields>;
  stddevSamp?: Maybe<InsurancesStddev_SampFields>;
  sum?: Maybe<InsurancesSumFields>;
  varPop?: Maybe<InsurancesVar_PopFields>;
  varSamp?: Maybe<InsurancesVar_SampFields>;
  variance?: Maybe<InsurancesVarianceFields>;
};


/** aggregate fields of "insurances" */
export type InsurancesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<InsurancesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "insurances" */
export type InsurancesAggregateOrderBy = {
  avg?: InputMaybe<Insurances_Avg_Order_By>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Insurances_Max_Order_By>;
  min?: InputMaybe<Insurances_Min_Order_By>;
  stddev?: InputMaybe<Insurances_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Insurances_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Insurances_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Insurances_Sum_Order_By>;
  var_pop?: InputMaybe<Insurances_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Insurances_Var_Samp_Order_By>;
  variance?: InputMaybe<Insurances_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "insurances" */
export type InsurancesArrRelInsertInput = {
  data: Array<InsurancesInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<InsurancesOnConflict>;
};

/** aggregate avg on columns */
export type InsurancesAvgFields = {
  __typename?: 'InsurancesAvgFields';
  firstInstallment?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  secondInstallment?: Maybe<Scalars['Float']>;
  vehicleId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "insurances". All fields are combined with a logical 'AND'. */
export type InsurancesBoolExp = {
  _and?: InputMaybe<Array<InsurancesBoolExp>>;
  _not?: InputMaybe<InsurancesBoolExp>;
  _or?: InputMaybe<Array<InsurancesBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  endDate?: InputMaybe<DateComparisonExp>;
  firstInstallment?: InputMaybe<MoneyComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  price?: InputMaybe<MoneyComparisonExp>;
  reactivationDate?: InputMaybe<DateComparisonExp>;
  secondInstallment?: InputMaybe<MoneyComparisonExp>;
  startDate?: InputMaybe<DateComparisonExp>;
  suspensionDate?: InputMaybe<DateComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  vehicleId?: InputMaybe<IntComparisonExp>;
  vehicleOfInsurance?: InputMaybe<VehiclesBoolExp>;
};

/** unique or primary key constraints on table "insurances" */
export enum InsurancesConstraint {
  /** unique or primary key constraint on columns "id" */
  InsurancesPkey = 'insurances_pkey'
}

/** input type for incrementing numeric columns in table "insurances" */
export type InsurancesIncInput = {
  firstInstallment?: InputMaybe<Scalars['money']>;
  id?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['money']>;
  secondInstallment?: InputMaybe<Scalars['money']>;
  vehicleId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "insurances" */
export type InsurancesInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  endDate?: InputMaybe<Scalars['date']>;
  firstInstallment?: InputMaybe<Scalars['money']>;
  id?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['money']>;
  reactivationDate?: InputMaybe<Scalars['date']>;
  secondInstallment?: InputMaybe<Scalars['money']>;
  startDate?: InputMaybe<Scalars['date']>;
  suspensionDate?: InputMaybe<Scalars['date']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  vehicleId?: InputMaybe<Scalars['Int']>;
  vehicleOfInsurance?: InputMaybe<VehiclesObjRelInsertInput>;
};

/** aggregate max on columns */
export type InsurancesMaxFields = {
  __typename?: 'InsurancesMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  endDate?: Maybe<Scalars['date']>;
  firstInstallment?: Maybe<Scalars['money']>;
  id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['money']>;
  reactivationDate?: Maybe<Scalars['date']>;
  secondInstallment?: Maybe<Scalars['money']>;
  startDate?: Maybe<Scalars['date']>;
  suspensionDate?: Maybe<Scalars['date']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  vehicleId?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type InsurancesMinFields = {
  __typename?: 'InsurancesMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  endDate?: Maybe<Scalars['date']>;
  firstInstallment?: Maybe<Scalars['money']>;
  id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['money']>;
  reactivationDate?: Maybe<Scalars['date']>;
  secondInstallment?: Maybe<Scalars['money']>;
  startDate?: Maybe<Scalars['date']>;
  suspensionDate?: Maybe<Scalars['date']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  vehicleId?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "insurances" */
export type InsurancesMutationResponse = {
  __typename?: 'InsurancesMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Insurances>;
};

/** on_conflict condition type for table "insurances" */
export type InsurancesOnConflict = {
  constraint: InsurancesConstraint;
  update_columns?: Array<InsurancesUpdateColumn>;
  where?: InputMaybe<InsurancesBoolExp>;
};

/** Ordering options when selecting data from "insurances". */
export type InsurancesOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  endDate?: InputMaybe<OrderBy>;
  firstInstallment?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  reactivationDate?: InputMaybe<OrderBy>;
  secondInstallment?: InputMaybe<OrderBy>;
  startDate?: InputMaybe<OrderBy>;
  suspensionDate?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  vehicleId?: InputMaybe<OrderBy>;
  vehicleOfInsurance?: InputMaybe<VehiclesOrderBy>;
};

/** primary key columns input for table: insurances */
export type InsurancesPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "insurances" */
export enum InsurancesSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EndDate = 'endDate',
  /** column name */
  FirstInstallment = 'firstInstallment',
  /** column name */
  Id = 'id',
  /** column name */
  Price = 'price',
  /** column name */
  ReactivationDate = 'reactivationDate',
  /** column name */
  SecondInstallment = 'secondInstallment',
  /** column name */
  StartDate = 'startDate',
  /** column name */
  SuspensionDate = 'suspensionDate',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  VehicleId = 'vehicleId'
}

/** input type for updating data in table "insurances" */
export type InsurancesSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  endDate?: InputMaybe<Scalars['date']>;
  firstInstallment?: InputMaybe<Scalars['money']>;
  id?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['money']>;
  reactivationDate?: InputMaybe<Scalars['date']>;
  secondInstallment?: InputMaybe<Scalars['money']>;
  startDate?: InputMaybe<Scalars['date']>;
  suspensionDate?: InputMaybe<Scalars['date']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  vehicleId?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type InsurancesStddevFields = {
  __typename?: 'InsurancesStddevFields';
  firstInstallment?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  secondInstallment?: Maybe<Scalars['Float']>;
  vehicleId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type InsurancesStddev_PopFields = {
  __typename?: 'InsurancesStddev_popFields';
  firstInstallment?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  secondInstallment?: Maybe<Scalars['Float']>;
  vehicleId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type InsurancesStddev_SampFields = {
  __typename?: 'InsurancesStddev_sampFields';
  firstInstallment?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  secondInstallment?: Maybe<Scalars['Float']>;
  vehicleId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type InsurancesSumFields = {
  __typename?: 'InsurancesSumFields';
  firstInstallment?: Maybe<Scalars['money']>;
  id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['money']>;
  secondInstallment?: Maybe<Scalars['money']>;
  vehicleId?: Maybe<Scalars['Int']>;
};

/** update columns of table "insurances" */
export enum InsurancesUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EndDate = 'endDate',
  /** column name */
  FirstInstallment = 'firstInstallment',
  /** column name */
  Id = 'id',
  /** column name */
  Price = 'price',
  /** column name */
  ReactivationDate = 'reactivationDate',
  /** column name */
  SecondInstallment = 'secondInstallment',
  /** column name */
  StartDate = 'startDate',
  /** column name */
  SuspensionDate = 'suspensionDate',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  VehicleId = 'vehicleId'
}

export type InsurancesUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<InsurancesIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<InsurancesSetInput>;
  where: InsurancesBoolExp;
};

/** aggregate var_pop on columns */
export type InsurancesVar_PopFields = {
  __typename?: 'InsurancesVar_popFields';
  firstInstallment?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  secondInstallment?: Maybe<Scalars['Float']>;
  vehicleId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type InsurancesVar_SampFields = {
  __typename?: 'InsurancesVar_sampFields';
  firstInstallment?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  secondInstallment?: Maybe<Scalars['Float']>;
  vehicleId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type InsurancesVarianceFields = {
  __typename?: 'InsurancesVarianceFields';
  firstInstallment?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  secondInstallment?: Maybe<Scalars['Float']>;
  vehicleId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** columns and relationships of "maintenances" */
export type Maintenances = {
  __typename?: 'Maintenances';
  createdAt: Scalars['timestamptz'];
  dateDone: Scalars['date'];
  description: Scalars['String'];
  id: Scalars['Int'];
  kilometers?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  vehicleId: Scalars['Int'];
  /** An object relationship */
  vehicleOfMaintenance?: Maybe<Vehicles>;
};

/** aggregated selection of "maintenances" */
export type MaintenancesAggregate = {
  __typename?: 'MaintenancesAggregate';
  aggregate?: Maybe<MaintenancesAggregateFields>;
  nodes: Array<Maintenances>;
};

/** aggregate fields of "maintenances" */
export type MaintenancesAggregateFields = {
  __typename?: 'MaintenancesAggregateFields';
  avg?: Maybe<MaintenancesAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<MaintenancesMaxFields>;
  min?: Maybe<MaintenancesMinFields>;
  stddev?: Maybe<MaintenancesStddevFields>;
  stddevPop?: Maybe<MaintenancesStddev_PopFields>;
  stddevSamp?: Maybe<MaintenancesStddev_SampFields>;
  sum?: Maybe<MaintenancesSumFields>;
  varPop?: Maybe<MaintenancesVar_PopFields>;
  varSamp?: Maybe<MaintenancesVar_SampFields>;
  variance?: Maybe<MaintenancesVarianceFields>;
};


/** aggregate fields of "maintenances" */
export type MaintenancesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<MaintenancesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "maintenances" */
export type MaintenancesAggregateOrderBy = {
  avg?: InputMaybe<Maintenances_Avg_Order_By>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Maintenances_Max_Order_By>;
  min?: InputMaybe<Maintenances_Min_Order_By>;
  stddev?: InputMaybe<Maintenances_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Maintenances_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Maintenances_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Maintenances_Sum_Order_By>;
  var_pop?: InputMaybe<Maintenances_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Maintenances_Var_Samp_Order_By>;
  variance?: InputMaybe<Maintenances_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "maintenances" */
export type MaintenancesArrRelInsertInput = {
  data: Array<MaintenancesInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<MaintenancesOnConflict>;
};

/** aggregate avg on columns */
export type MaintenancesAvgFields = {
  __typename?: 'MaintenancesAvgFields';
  id?: Maybe<Scalars['Float']>;
  kilometers?: Maybe<Scalars['Float']>;
  vehicleId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "maintenances". All fields are combined with a logical 'AND'. */
export type MaintenancesBoolExp = {
  _and?: InputMaybe<Array<MaintenancesBoolExp>>;
  _not?: InputMaybe<MaintenancesBoolExp>;
  _or?: InputMaybe<Array<MaintenancesBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  dateDone?: InputMaybe<DateComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  kilometers?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  vehicleId?: InputMaybe<IntComparisonExp>;
  vehicleOfMaintenance?: InputMaybe<VehiclesBoolExp>;
};

/** unique or primary key constraints on table "maintenances" */
export enum MaintenancesConstraint {
  /** unique or primary key constraint on columns "id" */
  MaintenancesPkey = 'maintenances_pkey'
}

/** input type for incrementing numeric columns in table "maintenances" */
export type MaintenancesIncInput = {
  id?: InputMaybe<Scalars['Int']>;
  kilometers?: InputMaybe<Scalars['Int']>;
  vehicleId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "maintenances" */
export type MaintenancesInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  dateDone?: InputMaybe<Scalars['date']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  kilometers?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  vehicleId?: InputMaybe<Scalars['Int']>;
  vehicleOfMaintenance?: InputMaybe<VehiclesObjRelInsertInput>;
};

/** aggregate max on columns */
export type MaintenancesMaxFields = {
  __typename?: 'MaintenancesMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  dateDone?: Maybe<Scalars['date']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  kilometers?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  vehicleId?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type MaintenancesMinFields = {
  __typename?: 'MaintenancesMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  dateDone?: Maybe<Scalars['date']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  kilometers?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  vehicleId?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "maintenances" */
export type MaintenancesMutationResponse = {
  __typename?: 'MaintenancesMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Maintenances>;
};

/** on_conflict condition type for table "maintenances" */
export type MaintenancesOnConflict = {
  constraint: MaintenancesConstraint;
  update_columns?: Array<MaintenancesUpdateColumn>;
  where?: InputMaybe<MaintenancesBoolExp>;
};

/** Ordering options when selecting data from "maintenances". */
export type MaintenancesOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  dateDone?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  kilometers?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  vehicleId?: InputMaybe<OrderBy>;
  vehicleOfMaintenance?: InputMaybe<VehiclesOrderBy>;
};

/** primary key columns input for table: maintenances */
export type MaintenancesPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "maintenances" */
export enum MaintenancesSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DateDone = 'dateDone',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Kilometers = 'kilometers',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  VehicleId = 'vehicleId'
}

/** input type for updating data in table "maintenances" */
export type MaintenancesSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  dateDone?: InputMaybe<Scalars['date']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  kilometers?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  vehicleId?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type MaintenancesStddevFields = {
  __typename?: 'MaintenancesStddevFields';
  id?: Maybe<Scalars['Float']>;
  kilometers?: Maybe<Scalars['Float']>;
  vehicleId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type MaintenancesStddev_PopFields = {
  __typename?: 'MaintenancesStddev_popFields';
  id?: Maybe<Scalars['Float']>;
  kilometers?: Maybe<Scalars['Float']>;
  vehicleId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type MaintenancesStddev_SampFields = {
  __typename?: 'MaintenancesStddev_sampFields';
  id?: Maybe<Scalars['Float']>;
  kilometers?: Maybe<Scalars['Float']>;
  vehicleId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type MaintenancesSumFields = {
  __typename?: 'MaintenancesSumFields';
  id?: Maybe<Scalars['Int']>;
  kilometers?: Maybe<Scalars['Int']>;
  vehicleId?: Maybe<Scalars['Int']>;
};

/** update columns of table "maintenances" */
export enum MaintenancesUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DateDone = 'dateDone',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Kilometers = 'kilometers',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  VehicleId = 'vehicleId'
}

export type MaintenancesUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<MaintenancesIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<MaintenancesSetInput>;
  where: MaintenancesBoolExp;
};

/** aggregate var_pop on columns */
export type MaintenancesVar_PopFields = {
  __typename?: 'MaintenancesVar_popFields';
  id?: Maybe<Scalars['Float']>;
  kilometers?: Maybe<Scalars['Float']>;
  vehicleId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type MaintenancesVar_SampFields = {
  __typename?: 'MaintenancesVar_sampFields';
  id?: Maybe<Scalars['Float']>;
  kilometers?: Maybe<Scalars['Float']>;
  vehicleId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type MaintenancesVarianceFields = {
  __typename?: 'MaintenancesVarianceFields';
  id?: Maybe<Scalars['Float']>;
  kilometers?: Maybe<Scalars['Float']>;
  vehicleId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "money". All fields are combined with logical 'AND'. */
export type MoneyComparisonExp = {
  _eq?: InputMaybe<Scalars['money']>;
  _gt?: InputMaybe<Scalars['money']>;
  _gte?: InputMaybe<Scalars['money']>;
  _in?: InputMaybe<Array<Scalars['money']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['money']>;
  _lte?: InputMaybe<Scalars['money']>;
  _neq?: InputMaybe<Scalars['money']>;
  _nin?: InputMaybe<Array<Scalars['money']>>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'ASC',
  /** in ascending order, nulls first */
  AscNullsFirst = 'ASC_NULLS_FIRST',
  /** in ascending order, nulls last */
  AscNullsLast = 'ASC_NULLS_LAST',
  /** in descending order, nulls first */
  Desc = 'DESC',
  /** in descending order, nulls first */
  DescNullsFirst = 'DESC_NULLS_FIRST',
  /** in descending order, nulls last */
  DescNullsLast = 'DESC_NULLS_LAST'
}

/** columns and relationships of "revisions" */
export type Revisions = {
  __typename?: 'Revisions';
  createdAt: Scalars['timestamptz'];
  dateDone: Scalars['date'];
  id: Scalars['Int'];
  kilometers: Scalars['Int'];
  updatedAt: Scalars['timestamptz'];
  vehicleId?: Maybe<Scalars['Int']>;
  /** An object relationship */
  vehicleOfRevision?: Maybe<Vehicles>;
};

/** aggregated selection of "revisions" */
export type RevisionsAggregate = {
  __typename?: 'RevisionsAggregate';
  aggregate?: Maybe<RevisionsAggregateFields>;
  nodes: Array<Revisions>;
};

/** aggregate fields of "revisions" */
export type RevisionsAggregateFields = {
  __typename?: 'RevisionsAggregateFields';
  avg?: Maybe<RevisionsAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<RevisionsMaxFields>;
  min?: Maybe<RevisionsMinFields>;
  stddev?: Maybe<RevisionsStddevFields>;
  stddevPop?: Maybe<RevisionsStddev_PopFields>;
  stddevSamp?: Maybe<RevisionsStddev_SampFields>;
  sum?: Maybe<RevisionsSumFields>;
  varPop?: Maybe<RevisionsVar_PopFields>;
  varSamp?: Maybe<RevisionsVar_SampFields>;
  variance?: Maybe<RevisionsVarianceFields>;
};


/** aggregate fields of "revisions" */
export type RevisionsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<RevisionsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "revisions" */
export type RevisionsAggregateOrderBy = {
  avg?: InputMaybe<Revisions_Avg_Order_By>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Revisions_Max_Order_By>;
  min?: InputMaybe<Revisions_Min_Order_By>;
  stddev?: InputMaybe<Revisions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Revisions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Revisions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Revisions_Sum_Order_By>;
  var_pop?: InputMaybe<Revisions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Revisions_Var_Samp_Order_By>;
  variance?: InputMaybe<Revisions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "revisions" */
export type RevisionsArrRelInsertInput = {
  data: Array<RevisionsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<RevisionsOnConflict>;
};

/** aggregate avg on columns */
export type RevisionsAvgFields = {
  __typename?: 'RevisionsAvgFields';
  id?: Maybe<Scalars['Float']>;
  kilometers?: Maybe<Scalars['Float']>;
  vehicleId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "revisions". All fields are combined with a logical 'AND'. */
export type RevisionsBoolExp = {
  _and?: InputMaybe<Array<RevisionsBoolExp>>;
  _not?: InputMaybe<RevisionsBoolExp>;
  _or?: InputMaybe<Array<RevisionsBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  dateDone?: InputMaybe<DateComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  kilometers?: InputMaybe<IntComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  vehicleId?: InputMaybe<IntComparisonExp>;
  vehicleOfRevision?: InputMaybe<VehiclesBoolExp>;
};

/** unique or primary key constraints on table "revisions" */
export enum RevisionsConstraint {
  /** unique or primary key constraint on columns "id" */
  RevisionsPkey = 'revisions_pkey'
}

/** input type for incrementing numeric columns in table "revisions" */
export type RevisionsIncInput = {
  id?: InputMaybe<Scalars['Int']>;
  kilometers?: InputMaybe<Scalars['Int']>;
  vehicleId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "revisions" */
export type RevisionsInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  dateDone?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['Int']>;
  kilometers?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  vehicleId?: InputMaybe<Scalars['Int']>;
  vehicleOfRevision?: InputMaybe<VehiclesObjRelInsertInput>;
};

/** aggregate max on columns */
export type RevisionsMaxFields = {
  __typename?: 'RevisionsMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  dateDone?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  kilometers?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  vehicleId?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type RevisionsMinFields = {
  __typename?: 'RevisionsMinFields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  dateDone?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  kilometers?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  vehicleId?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "revisions" */
export type RevisionsMutationResponse = {
  __typename?: 'RevisionsMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Revisions>;
};

/** on_conflict condition type for table "revisions" */
export type RevisionsOnConflict = {
  constraint: RevisionsConstraint;
  update_columns?: Array<RevisionsUpdateColumn>;
  where?: InputMaybe<RevisionsBoolExp>;
};

/** Ordering options when selecting data from "revisions". */
export type RevisionsOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  dateDone?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  kilometers?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  vehicleId?: InputMaybe<OrderBy>;
  vehicleOfRevision?: InputMaybe<VehiclesOrderBy>;
};

/** primary key columns input for table: revisions */
export type RevisionsPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "revisions" */
export enum RevisionsSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DateDone = 'dateDone',
  /** column name */
  Id = 'id',
  /** column name */
  Kilometers = 'kilometers',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  VehicleId = 'vehicleId'
}

/** input type for updating data in table "revisions" */
export type RevisionsSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  dateDone?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['Int']>;
  kilometers?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  vehicleId?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type RevisionsStddevFields = {
  __typename?: 'RevisionsStddevFields';
  id?: Maybe<Scalars['Float']>;
  kilometers?: Maybe<Scalars['Float']>;
  vehicleId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type RevisionsStddev_PopFields = {
  __typename?: 'RevisionsStddev_popFields';
  id?: Maybe<Scalars['Float']>;
  kilometers?: Maybe<Scalars['Float']>;
  vehicleId?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type RevisionsStddev_SampFields = {
  __typename?: 'RevisionsStddev_sampFields';
  id?: Maybe<Scalars['Float']>;
  kilometers?: Maybe<Scalars['Float']>;
  vehicleId?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type RevisionsSumFields = {
  __typename?: 'RevisionsSumFields';
  id?: Maybe<Scalars['Int']>;
  kilometers?: Maybe<Scalars['Int']>;
  vehicleId?: Maybe<Scalars['Int']>;
};

/** update columns of table "revisions" */
export enum RevisionsUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DateDone = 'dateDone',
  /** column name */
  Id = 'id',
  /** column name */
  Kilometers = 'kilometers',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  VehicleId = 'vehicleId'
}

export type RevisionsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<RevisionsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<RevisionsSetInput>;
  where: RevisionsBoolExp;
};

/** aggregate var_pop on columns */
export type RevisionsVar_PopFields = {
  __typename?: 'RevisionsVar_popFields';
  id?: Maybe<Scalars['Float']>;
  kilometers?: Maybe<Scalars['Float']>;
  vehicleId?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type RevisionsVar_SampFields = {
  __typename?: 'RevisionsVar_sampFields';
  id?: Maybe<Scalars['Float']>;
  kilometers?: Maybe<Scalars['Float']>;
  vehicleId?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type RevisionsVarianceFields = {
  __typename?: 'RevisionsVarianceFields';
  id?: Maybe<Scalars['Float']>;
  kilometers?: Maybe<Scalars['Float']>;
  vehicleId?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "vehicles" */
export type Vehicles = {
  __typename?: 'Vehicles';
  buildDate?: Maybe<Scalars['date']>;
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  /** An array relationship */
  insurances: Array<Insurances>;
  /** An aggregate relationship */
  insurancesAggregate: InsurancesAggregate;
  licensePlate?: Maybe<Scalars['String']>;
  /** An array relationship */
  maintenances: Array<Maintenances>;
  /** An aggregate relationship */
  maintenancesAggregate: MaintenancesAggregate;
  name: Scalars['String'];
  /** An array relationship */
  revisions: Array<Revisions>;
  /** An aggregate relationship */
  revisionsAggregate: RevisionsAggregate;
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "vehicles" */
export type VehiclesInsurancesArgs = {
  distinctOn?: InputMaybe<Array<InsurancesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InsurancesOrderBy>>;
  where?: InputMaybe<InsurancesBoolExp>;
};


/** columns and relationships of "vehicles" */
export type VehiclesInsurancesAggregateArgs = {
  distinctOn?: InputMaybe<Array<InsurancesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InsurancesOrderBy>>;
  where?: InputMaybe<InsurancesBoolExp>;
};


/** columns and relationships of "vehicles" */
export type VehiclesMaintenancesArgs = {
  distinctOn?: InputMaybe<Array<MaintenancesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MaintenancesOrderBy>>;
  where?: InputMaybe<MaintenancesBoolExp>;
};


/** columns and relationships of "vehicles" */
export type VehiclesMaintenancesAggregateArgs = {
  distinctOn?: InputMaybe<Array<MaintenancesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MaintenancesOrderBy>>;
  where?: InputMaybe<MaintenancesBoolExp>;
};


/** columns and relationships of "vehicles" */
export type VehiclesRevisionsArgs = {
  distinctOn?: InputMaybe<Array<RevisionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RevisionsOrderBy>>;
  where?: InputMaybe<RevisionsBoolExp>;
};


/** columns and relationships of "vehicles" */
export type VehiclesRevisionsAggregateArgs = {
  distinctOn?: InputMaybe<Array<RevisionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RevisionsOrderBy>>;
  where?: InputMaybe<RevisionsBoolExp>;
};

/** aggregated selection of "vehicles" */
export type VehiclesAggregate = {
  __typename?: 'VehiclesAggregate';
  aggregate?: Maybe<VehiclesAggregateFields>;
  nodes: Array<Vehicles>;
};

/** aggregate fields of "vehicles" */
export type VehiclesAggregateFields = {
  __typename?: 'VehiclesAggregateFields';
  avg?: Maybe<VehiclesAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<VehiclesMaxFields>;
  min?: Maybe<VehiclesMinFields>;
  stddev?: Maybe<VehiclesStddevFields>;
  stddevPop?: Maybe<VehiclesStddev_PopFields>;
  stddevSamp?: Maybe<VehiclesStddev_SampFields>;
  sum?: Maybe<VehiclesSumFields>;
  varPop?: Maybe<VehiclesVar_PopFields>;
  varSamp?: Maybe<VehiclesVar_SampFields>;
  variance?: Maybe<VehiclesVarianceFields>;
};


/** aggregate fields of "vehicles" */
export type VehiclesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<VehiclesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type VehiclesAvgFields = {
  __typename?: 'VehiclesAvgFields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "vehicles". All fields are combined with a logical 'AND'. */
export type VehiclesBoolExp = {
  _and?: InputMaybe<Array<VehiclesBoolExp>>;
  _not?: InputMaybe<VehiclesBoolExp>;
  _or?: InputMaybe<Array<VehiclesBoolExp>>;
  buildDate?: InputMaybe<DateComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  image?: InputMaybe<StringComparisonExp>;
  insurances?: InputMaybe<InsurancesBoolExp>;
  licensePlate?: InputMaybe<StringComparisonExp>;
  maintenances?: InputMaybe<MaintenancesBoolExp>;
  name?: InputMaybe<StringComparisonExp>;
  revisions?: InputMaybe<RevisionsBoolExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "vehicles" */
export enum VehiclesConstraint {
  /** unique or primary key constraint on columns "id" */
  VehiclesPkey = 'vehicles_pkey'
}

/** input type for incrementing numeric columns in table "vehicles" */
export type VehiclesIncInput = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "vehicles" */
export type VehiclesInsertInput = {
  buildDate?: InputMaybe<Scalars['date']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  insurances?: InputMaybe<InsurancesArrRelInsertInput>;
  licensePlate?: InputMaybe<Scalars['String']>;
  maintenances?: InputMaybe<MaintenancesArrRelInsertInput>;
  name?: InputMaybe<Scalars['String']>;
  revisions?: InputMaybe<RevisionsArrRelInsertInput>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type VehiclesMaxFields = {
  __typename?: 'VehiclesMaxFields';
  buildDate?: Maybe<Scalars['date']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  licensePlate?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type VehiclesMinFields = {
  __typename?: 'VehiclesMinFields';
  buildDate?: Maybe<Scalars['date']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  licensePlate?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "vehicles" */
export type VehiclesMutationResponse = {
  __typename?: 'VehiclesMutationResponse';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Vehicles>;
};

/** input type for inserting object relation for remote table "vehicles" */
export type VehiclesObjRelInsertInput = {
  data: VehiclesInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<VehiclesOnConflict>;
};

/** on_conflict condition type for table "vehicles" */
export type VehiclesOnConflict = {
  constraint: VehiclesConstraint;
  update_columns?: Array<VehiclesUpdateColumn>;
  where?: InputMaybe<VehiclesBoolExp>;
};

/** Ordering options when selecting data from "vehicles". */
export type VehiclesOrderBy = {
  buildDate?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  image?: InputMaybe<OrderBy>;
  insurancesAggregate?: InputMaybe<InsurancesAggregateOrderBy>;
  licensePlate?: InputMaybe<OrderBy>;
  maintenancesAggregate?: InputMaybe<MaintenancesAggregateOrderBy>;
  name?: InputMaybe<OrderBy>;
  revisionsAggregate?: InputMaybe<RevisionsAggregateOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: vehicles */
export type VehiclesPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "vehicles" */
export enum VehiclesSelectColumn {
  /** column name */
  BuildDate = 'buildDate',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  LicensePlate = 'licensePlate',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "vehicles" */
export type VehiclesSetInput = {
  buildDate?: InputMaybe<Scalars['date']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  licensePlate?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type VehiclesStddevFields = {
  __typename?: 'VehiclesStddevFields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type VehiclesStddev_PopFields = {
  __typename?: 'VehiclesStddev_popFields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type VehiclesStddev_SampFields = {
  __typename?: 'VehiclesStddev_sampFields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type VehiclesSumFields = {
  __typename?: 'VehiclesSumFields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "vehicles" */
export enum VehiclesUpdateColumn {
  /** column name */
  BuildDate = 'buildDate',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  LicensePlate = 'licensePlate',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type VehiclesUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<VehiclesIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<VehiclesSetInput>;
  where: VehiclesBoolExp;
};

/** aggregate var_pop on columns */
export type VehiclesVar_PopFields = {
  __typename?: 'VehiclesVar_popFields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type VehiclesVar_SampFields = {
  __typename?: 'VehiclesVar_sampFields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type VehiclesVarianceFields = {
  __typename?: 'VehiclesVarianceFields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "insurances" */
export type Insurances_Avg_Order_By = {
  firstInstallment?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  secondInstallment?: InputMaybe<OrderBy>;
  vehicleId?: InputMaybe<OrderBy>;
};

/** order by max() on columns of table "insurances" */
export type Insurances_Max_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  endDate?: InputMaybe<OrderBy>;
  firstInstallment?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  reactivationDate?: InputMaybe<OrderBy>;
  secondInstallment?: InputMaybe<OrderBy>;
  startDate?: InputMaybe<OrderBy>;
  suspensionDate?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  vehicleId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "insurances" */
export type Insurances_Min_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  endDate?: InputMaybe<OrderBy>;
  firstInstallment?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  reactivationDate?: InputMaybe<OrderBy>;
  secondInstallment?: InputMaybe<OrderBy>;
  startDate?: InputMaybe<OrderBy>;
  suspensionDate?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  vehicleId?: InputMaybe<OrderBy>;
};

/** order by stddev() on columns of table "insurances" */
export type Insurances_Stddev_Order_By = {
  firstInstallment?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  secondInstallment?: InputMaybe<OrderBy>;
  vehicleId?: InputMaybe<OrderBy>;
};

/** order by stddev_pop() on columns of table "insurances" */
export type Insurances_Stddev_Pop_Order_By = {
  firstInstallment?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  secondInstallment?: InputMaybe<OrderBy>;
  vehicleId?: InputMaybe<OrderBy>;
};

/** order by stddev_samp() on columns of table "insurances" */
export type Insurances_Stddev_Samp_Order_By = {
  firstInstallment?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  secondInstallment?: InputMaybe<OrderBy>;
  vehicleId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "insurances" */
export type Insurances_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Insurances_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Insurances_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  endDate?: InputMaybe<Scalars['date']>;
  firstInstallment?: InputMaybe<Scalars['money']>;
  id?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['money']>;
  reactivationDate?: InputMaybe<Scalars['date']>;
  secondInstallment?: InputMaybe<Scalars['money']>;
  startDate?: InputMaybe<Scalars['date']>;
  suspensionDate?: InputMaybe<Scalars['date']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  vehicleId?: InputMaybe<Scalars['Int']>;
};

/** order by sum() on columns of table "insurances" */
export type Insurances_Sum_Order_By = {
  firstInstallment?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  secondInstallment?: InputMaybe<OrderBy>;
  vehicleId?: InputMaybe<OrderBy>;
};

/** order by var_pop() on columns of table "insurances" */
export type Insurances_Var_Pop_Order_By = {
  firstInstallment?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  secondInstallment?: InputMaybe<OrderBy>;
  vehicleId?: InputMaybe<OrderBy>;
};

/** order by var_samp() on columns of table "insurances" */
export type Insurances_Var_Samp_Order_By = {
  firstInstallment?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  secondInstallment?: InputMaybe<OrderBy>;
  vehicleId?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "insurances" */
export type Insurances_Variance_Order_By = {
  firstInstallment?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  price?: InputMaybe<OrderBy>;
  secondInstallment?: InputMaybe<OrderBy>;
  vehicleId?: InputMaybe<OrderBy>;
};

/** order by avg() on columns of table "maintenances" */
export type Maintenances_Avg_Order_By = {
  id?: InputMaybe<OrderBy>;
  kilometers?: InputMaybe<OrderBy>;
  vehicleId?: InputMaybe<OrderBy>;
};

/** order by max() on columns of table "maintenances" */
export type Maintenances_Max_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  dateDone?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  kilometers?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  vehicleId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "maintenances" */
export type Maintenances_Min_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  dateDone?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  kilometers?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  vehicleId?: InputMaybe<OrderBy>;
};

/** order by stddev() on columns of table "maintenances" */
export type Maintenances_Stddev_Order_By = {
  id?: InputMaybe<OrderBy>;
  kilometers?: InputMaybe<OrderBy>;
  vehicleId?: InputMaybe<OrderBy>;
};

/** order by stddev_pop() on columns of table "maintenances" */
export type Maintenances_Stddev_Pop_Order_By = {
  id?: InputMaybe<OrderBy>;
  kilometers?: InputMaybe<OrderBy>;
  vehicleId?: InputMaybe<OrderBy>;
};

/** order by stddev_samp() on columns of table "maintenances" */
export type Maintenances_Stddev_Samp_Order_By = {
  id?: InputMaybe<OrderBy>;
  kilometers?: InputMaybe<OrderBy>;
  vehicleId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "maintenances" */
export type Maintenances_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Maintenances_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Maintenances_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  dateDone?: InputMaybe<Scalars['date']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  kilometers?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  vehicleId?: InputMaybe<Scalars['Int']>;
};

/** order by sum() on columns of table "maintenances" */
export type Maintenances_Sum_Order_By = {
  id?: InputMaybe<OrderBy>;
  kilometers?: InputMaybe<OrderBy>;
  vehicleId?: InputMaybe<OrderBy>;
};

/** order by var_pop() on columns of table "maintenances" */
export type Maintenances_Var_Pop_Order_By = {
  id?: InputMaybe<OrderBy>;
  kilometers?: InputMaybe<OrderBy>;
  vehicleId?: InputMaybe<OrderBy>;
};

/** order by var_samp() on columns of table "maintenances" */
export type Maintenances_Var_Samp_Order_By = {
  id?: InputMaybe<OrderBy>;
  kilometers?: InputMaybe<OrderBy>;
  vehicleId?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "maintenances" */
export type Maintenances_Variance_Order_By = {
  id?: InputMaybe<OrderBy>;
  kilometers?: InputMaybe<OrderBy>;
  vehicleId?: InputMaybe<OrderBy>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "insurances" */
  deleteInsurances?: Maybe<InsurancesMutationResponse>;
  /** delete single row from the table: "insurances" */
  deleteInsurancesByPk?: Maybe<Insurances>;
  /** delete data from the table: "maintenances" */
  deleteMaintenances?: Maybe<MaintenancesMutationResponse>;
  /** delete single row from the table: "maintenances" */
  deleteMaintenancesByPk?: Maybe<Maintenances>;
  /** delete data from the table: "revisions" */
  deleteRevisions?: Maybe<RevisionsMutationResponse>;
  /** delete single row from the table: "revisions" */
  deleteRevisionsByPk?: Maybe<Revisions>;
  /** delete data from the table: "vehicles" */
  deleteVehicles?: Maybe<VehiclesMutationResponse>;
  /** delete single row from the table: "vehicles" */
  deleteVehiclesByPk?: Maybe<Vehicles>;
  /** insert data into the table: "insurances" */
  insertInsurances?: Maybe<InsurancesMutationResponse>;
  /** insert a single row into the table: "insurances" */
  insertInsurancesOne?: Maybe<Insurances>;
  /** insert data into the table: "maintenances" */
  insertMaintenances?: Maybe<MaintenancesMutationResponse>;
  /** insert a single row into the table: "maintenances" */
  insertMaintenancesOne?: Maybe<Maintenances>;
  /** insert data into the table: "revisions" */
  insertRevisions?: Maybe<RevisionsMutationResponse>;
  /** insert a single row into the table: "revisions" */
  insertRevisionsOne?: Maybe<Revisions>;
  /** insert data into the table: "vehicles" */
  insertVehicles?: Maybe<VehiclesMutationResponse>;
  /** insert a single row into the table: "vehicles" */
  insertVehiclesOne?: Maybe<Vehicles>;
  /** update data of the table: "insurances" */
  updateInsurances?: Maybe<InsurancesMutationResponse>;
  /** update single row of the table: "insurances" */
  updateInsurancesByPk?: Maybe<Insurances>;
  /** update multiples rows of table: "insurances" */
  updateInsurancesMany?: Maybe<Array<Maybe<InsurancesMutationResponse>>>;
  /** update data of the table: "maintenances" */
  updateMaintenances?: Maybe<MaintenancesMutationResponse>;
  /** update single row of the table: "maintenances" */
  updateMaintenancesByPk?: Maybe<Maintenances>;
  /** update multiples rows of table: "maintenances" */
  updateMaintenancesMany?: Maybe<Array<Maybe<MaintenancesMutationResponse>>>;
  /** update data of the table: "revisions" */
  updateRevisions?: Maybe<RevisionsMutationResponse>;
  /** update single row of the table: "revisions" */
  updateRevisionsByPk?: Maybe<Revisions>;
  /** update multiples rows of table: "revisions" */
  updateRevisionsMany?: Maybe<Array<Maybe<RevisionsMutationResponse>>>;
  /** update data of the table: "vehicles" */
  updateVehicles?: Maybe<VehiclesMutationResponse>;
  /** update single row of the table: "vehicles" */
  updateVehiclesByPk?: Maybe<Vehicles>;
  /** update multiples rows of table: "vehicles" */
  updateVehiclesMany?: Maybe<Array<Maybe<VehiclesMutationResponse>>>;
};


/** mutation root */
export type Mutation_RootDeleteInsurancesArgs = {
  where: InsurancesBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteInsurancesByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDeleteMaintenancesArgs = {
  where: MaintenancesBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteMaintenancesByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDeleteRevisionsArgs = {
  where: RevisionsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteRevisionsByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDeleteVehiclesArgs = {
  where: VehiclesBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteVehiclesByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsertInsurancesArgs = {
  objects: Array<InsurancesInsertInput>;
  onConflict?: InputMaybe<InsurancesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertInsurancesOneArgs = {
  object: InsurancesInsertInput;
  onConflict?: InputMaybe<InsurancesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertMaintenancesArgs = {
  objects: Array<MaintenancesInsertInput>;
  onConflict?: InputMaybe<MaintenancesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertMaintenancesOneArgs = {
  object: MaintenancesInsertInput;
  onConflict?: InputMaybe<MaintenancesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertRevisionsArgs = {
  objects: Array<RevisionsInsertInput>;
  onConflict?: InputMaybe<RevisionsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertRevisionsOneArgs = {
  object: RevisionsInsertInput;
  onConflict?: InputMaybe<RevisionsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertVehiclesArgs = {
  objects: Array<VehiclesInsertInput>;
  onConflict?: InputMaybe<VehiclesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertVehiclesOneArgs = {
  object: VehiclesInsertInput;
  onConflict?: InputMaybe<VehiclesOnConflict>;
};


/** mutation root */
export type Mutation_RootUpdateInsurancesArgs = {
  _inc?: InputMaybe<InsurancesIncInput>;
  _set?: InputMaybe<InsurancesSetInput>;
  where: InsurancesBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateInsurancesByPkArgs = {
  _inc?: InputMaybe<InsurancesIncInput>;
  _set?: InputMaybe<InsurancesSetInput>;
  pk_columns: InsurancesPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateInsurancesManyArgs = {
  updates: Array<InsurancesUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateMaintenancesArgs = {
  _inc?: InputMaybe<MaintenancesIncInput>;
  _set?: InputMaybe<MaintenancesSetInput>;
  where: MaintenancesBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateMaintenancesByPkArgs = {
  _inc?: InputMaybe<MaintenancesIncInput>;
  _set?: InputMaybe<MaintenancesSetInput>;
  pk_columns: MaintenancesPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateMaintenancesManyArgs = {
  updates: Array<MaintenancesUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateRevisionsArgs = {
  _inc?: InputMaybe<RevisionsIncInput>;
  _set?: InputMaybe<RevisionsSetInput>;
  where: RevisionsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateRevisionsByPkArgs = {
  _inc?: InputMaybe<RevisionsIncInput>;
  _set?: InputMaybe<RevisionsSetInput>;
  pk_columns: RevisionsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateRevisionsManyArgs = {
  updates: Array<RevisionsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateVehiclesArgs = {
  _inc?: InputMaybe<VehiclesIncInput>;
  _set?: InputMaybe<VehiclesSetInput>;
  where: VehiclesBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateVehiclesByPkArgs = {
  _inc?: InputMaybe<VehiclesIncInput>;
  _set?: InputMaybe<VehiclesSetInput>;
  pk_columns: VehiclesPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateVehiclesManyArgs = {
  updates: Array<VehiclesUpdates>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  insurances: Array<Insurances>;
  /** An aggregate relationship */
  insurancesAggregate: InsurancesAggregate;
  /** fetch data from the table: "insurances" using primary key columns */
  insurancesByPk?: Maybe<Insurances>;
  /** An array relationship */
  maintenances: Array<Maintenances>;
  /** An aggregate relationship */
  maintenancesAggregate: MaintenancesAggregate;
  /** fetch data from the table: "maintenances" using primary key columns */
  maintenancesByPk?: Maybe<Maintenances>;
  /** An array relationship */
  revisions: Array<Revisions>;
  /** An aggregate relationship */
  revisionsAggregate: RevisionsAggregate;
  /** fetch data from the table: "revisions" using primary key columns */
  revisionsByPk?: Maybe<Revisions>;
  /** fetch data from the table: "vehicles" */
  vehicles: Array<Vehicles>;
  /** fetch aggregated fields from the table: "vehicles" */
  vehiclesAggregate: VehiclesAggregate;
  /** fetch data from the table: "vehicles" using primary key columns */
  vehiclesByPk?: Maybe<Vehicles>;
};


export type Query_RootInsurancesArgs = {
  distinctOn?: InputMaybe<Array<InsurancesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InsurancesOrderBy>>;
  where?: InputMaybe<InsurancesBoolExp>;
};


export type Query_RootInsurancesAggregateArgs = {
  distinctOn?: InputMaybe<Array<InsurancesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InsurancesOrderBy>>;
  where?: InputMaybe<InsurancesBoolExp>;
};


export type Query_RootInsurancesByPkArgs = {
  id: Scalars['Int'];
};


export type Query_RootMaintenancesArgs = {
  distinctOn?: InputMaybe<Array<MaintenancesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MaintenancesOrderBy>>;
  where?: InputMaybe<MaintenancesBoolExp>;
};


export type Query_RootMaintenancesAggregateArgs = {
  distinctOn?: InputMaybe<Array<MaintenancesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MaintenancesOrderBy>>;
  where?: InputMaybe<MaintenancesBoolExp>;
};


export type Query_RootMaintenancesByPkArgs = {
  id: Scalars['Int'];
};


export type Query_RootRevisionsArgs = {
  distinctOn?: InputMaybe<Array<RevisionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RevisionsOrderBy>>;
  where?: InputMaybe<RevisionsBoolExp>;
};


export type Query_RootRevisionsAggregateArgs = {
  distinctOn?: InputMaybe<Array<RevisionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RevisionsOrderBy>>;
  where?: InputMaybe<RevisionsBoolExp>;
};


export type Query_RootRevisionsByPkArgs = {
  id: Scalars['Int'];
};


export type Query_RootVehiclesArgs = {
  distinctOn?: InputMaybe<Array<VehiclesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<VehiclesOrderBy>>;
  where?: InputMaybe<VehiclesBoolExp>;
};


export type Query_RootVehiclesAggregateArgs = {
  distinctOn?: InputMaybe<Array<VehiclesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<VehiclesOrderBy>>;
  where?: InputMaybe<VehiclesBoolExp>;
};


export type Query_RootVehiclesByPkArgs = {
  id: Scalars['Int'];
};

/** order by avg() on columns of table "revisions" */
export type Revisions_Avg_Order_By = {
  id?: InputMaybe<OrderBy>;
  kilometers?: InputMaybe<OrderBy>;
  vehicleId?: InputMaybe<OrderBy>;
};

/** order by max() on columns of table "revisions" */
export type Revisions_Max_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  dateDone?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  kilometers?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  vehicleId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "revisions" */
export type Revisions_Min_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  dateDone?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  kilometers?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  vehicleId?: InputMaybe<OrderBy>;
};

/** order by stddev() on columns of table "revisions" */
export type Revisions_Stddev_Order_By = {
  id?: InputMaybe<OrderBy>;
  kilometers?: InputMaybe<OrderBy>;
  vehicleId?: InputMaybe<OrderBy>;
};

/** order by stddev_pop() on columns of table "revisions" */
export type Revisions_Stddev_Pop_Order_By = {
  id?: InputMaybe<OrderBy>;
  kilometers?: InputMaybe<OrderBy>;
  vehicleId?: InputMaybe<OrderBy>;
};

/** order by stddev_samp() on columns of table "revisions" */
export type Revisions_Stddev_Samp_Order_By = {
  id?: InputMaybe<OrderBy>;
  kilometers?: InputMaybe<OrderBy>;
  vehicleId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "revisions" */
export type Revisions_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Revisions_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Revisions_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  dateDone?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['Int']>;
  kilometers?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  vehicleId?: InputMaybe<Scalars['Int']>;
};

/** order by sum() on columns of table "revisions" */
export type Revisions_Sum_Order_By = {
  id?: InputMaybe<OrderBy>;
  kilometers?: InputMaybe<OrderBy>;
  vehicleId?: InputMaybe<OrderBy>;
};

/** order by var_pop() on columns of table "revisions" */
export type Revisions_Var_Pop_Order_By = {
  id?: InputMaybe<OrderBy>;
  kilometers?: InputMaybe<OrderBy>;
  vehicleId?: InputMaybe<OrderBy>;
};

/** order by var_samp() on columns of table "revisions" */
export type Revisions_Var_Samp_Order_By = {
  id?: InputMaybe<OrderBy>;
  kilometers?: InputMaybe<OrderBy>;
  vehicleId?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "revisions" */
export type Revisions_Variance_Order_By = {
  id?: InputMaybe<OrderBy>;
  kilometers?: InputMaybe<OrderBy>;
  vehicleId?: InputMaybe<OrderBy>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  insurances: Array<Insurances>;
  /** An aggregate relationship */
  insurancesAggregate: InsurancesAggregate;
  /** fetch data from the table: "insurances" using primary key columns */
  insurancesByPk?: Maybe<Insurances>;
  /** fetch data from the table in a streaming manner : "insurances" */
  insurancesStream: Array<Insurances>;
  /** An array relationship */
  maintenances: Array<Maintenances>;
  /** An aggregate relationship */
  maintenancesAggregate: MaintenancesAggregate;
  /** fetch data from the table: "maintenances" using primary key columns */
  maintenancesByPk?: Maybe<Maintenances>;
  /** fetch data from the table in a streaming manner : "maintenances" */
  maintenancesStream: Array<Maintenances>;
  /** An array relationship */
  revisions: Array<Revisions>;
  /** An aggregate relationship */
  revisionsAggregate: RevisionsAggregate;
  /** fetch data from the table: "revisions" using primary key columns */
  revisionsByPk?: Maybe<Revisions>;
  /** fetch data from the table in a streaming manner : "revisions" */
  revisionsStream: Array<Revisions>;
  /** fetch data from the table: "vehicles" */
  vehicles: Array<Vehicles>;
  /** fetch aggregated fields from the table: "vehicles" */
  vehiclesAggregate: VehiclesAggregate;
  /** fetch data from the table: "vehicles" using primary key columns */
  vehiclesByPk?: Maybe<Vehicles>;
  /** fetch data from the table in a streaming manner : "vehicles" */
  vehiclesStream: Array<Vehicles>;
};


export type Subscription_RootInsurancesArgs = {
  distinctOn?: InputMaybe<Array<InsurancesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InsurancesOrderBy>>;
  where?: InputMaybe<InsurancesBoolExp>;
};


export type Subscription_RootInsurancesAggregateArgs = {
  distinctOn?: InputMaybe<Array<InsurancesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InsurancesOrderBy>>;
  where?: InputMaybe<InsurancesBoolExp>;
};


export type Subscription_RootInsurancesByPkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootInsurancesStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Insurances_StreamCursorInput>>;
  where?: InputMaybe<InsurancesBoolExp>;
};


export type Subscription_RootMaintenancesArgs = {
  distinctOn?: InputMaybe<Array<MaintenancesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MaintenancesOrderBy>>;
  where?: InputMaybe<MaintenancesBoolExp>;
};


export type Subscription_RootMaintenancesAggregateArgs = {
  distinctOn?: InputMaybe<Array<MaintenancesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MaintenancesOrderBy>>;
  where?: InputMaybe<MaintenancesBoolExp>;
};


export type Subscription_RootMaintenancesByPkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootMaintenancesStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Maintenances_StreamCursorInput>>;
  where?: InputMaybe<MaintenancesBoolExp>;
};


export type Subscription_RootRevisionsArgs = {
  distinctOn?: InputMaybe<Array<RevisionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RevisionsOrderBy>>;
  where?: InputMaybe<RevisionsBoolExp>;
};


export type Subscription_RootRevisionsAggregateArgs = {
  distinctOn?: InputMaybe<Array<RevisionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RevisionsOrderBy>>;
  where?: InputMaybe<RevisionsBoolExp>;
};


export type Subscription_RootRevisionsByPkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootRevisionsStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Revisions_StreamCursorInput>>;
  where?: InputMaybe<RevisionsBoolExp>;
};


export type Subscription_RootVehiclesArgs = {
  distinctOn?: InputMaybe<Array<VehiclesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<VehiclesOrderBy>>;
  where?: InputMaybe<VehiclesBoolExp>;
};


export type Subscription_RootVehiclesAggregateArgs = {
  distinctOn?: InputMaybe<Array<VehiclesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<VehiclesOrderBy>>;
  where?: InputMaybe<VehiclesBoolExp>;
};


export type Subscription_RootVehiclesByPkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootVehiclesStreamArgs = {
  batchSize: Scalars['Int'];
  cursor: Array<InputMaybe<Vehicles_StreamCursorInput>>;
  where?: InputMaybe<VehiclesBoolExp>;
};

/** Streaming cursor of the table "vehicles" */
export type Vehicles_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: Vehicles_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type Vehicles_StreamCursorValueInput = {
  buildDate?: InputMaybe<Scalars['date']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  licensePlate?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

export type CreateInsuranceMutationVariables = Exact<{
  object: InsurancesInsertInput;
}>;


export type CreateInsuranceMutation = { __typename?: 'mutation_root', insertInsurancesOne?: { __typename?: 'Insurances', id: number } | null };

export type UpdateInsuranceMutationVariables = Exact<{
  pkColumns: InsurancesPkColumnsInput;
  set?: InputMaybe<InsurancesSetInput>;
}>;


export type UpdateInsuranceMutation = { __typename?: 'mutation_root', updateInsurancesByPk?: { __typename?: 'Insurances', id: number } | null };

export type CreateVehicleMutationVariables = Exact<{
  object: VehiclesInsertInput;
}>;


export type CreateVehicleMutation = { __typename?: 'mutation_root', insertVehiclesOne?: { __typename?: 'Vehicles', id: number, name: string } | null };

export type UpdateVehicleMutationVariables = Exact<{
  pkColumns: VehiclesPkColumnsInput;
  set?: InputMaybe<VehiclesSetInput>;
}>;


export type UpdateVehicleMutation = { __typename?: 'mutation_root', updateVehiclesByPk?: { __typename?: 'Vehicles', id: number } | null };

export type AllInsurancesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllInsurancesQuery = { __typename?: 'query_root', insurances: Array<{ __typename?: 'Insurances', id: number, title: string, firstInstallment?: any | null, secondInstallment?: any | null, price?: any | null, vehicleId: number }> };

export type SingleInsuranceQueryVariables = Exact<{
  insuranceId: Scalars['Int'];
}>;


export type SingleInsuranceQuery = { __typename?: 'query_root', insurancesByPk?: { __typename?: 'Insurances', id: number, title: string, firstInstallment?: any | null, secondInstallment?: any | null, price?: any | null, startDate: any, endDate: any, suspensionDate?: any | null, reactivationDate?: any | null, vehicleId: number } | null };

export type AllVehiclesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllVehiclesQuery = { __typename?: 'query_root', vehicles: Array<{ __typename?: 'Vehicles', id: number, name: string, licensePlate?: string | null, buildDate?: any | null, image?: string | null }> };

export type SingleVehicleQueryVariables = Exact<{
  vehicleId: Scalars['Int'];
}>;


export type SingleVehicleQuery = { __typename?: 'query_root', vehiclesByPk?: { __typename?: 'Vehicles', id: number, name: string, licensePlate?: string | null, buildDate?: any | null, image?: string | null, insurances: Array<{ __typename?: 'Insurances', id: number, price?: any | null, title: string, firstInstallment?: any | null, secondInstallment?: any | null, reactivationDate?: any | null, startDate: any, suspensionDate?: any | null, vehicleId: number }>, maintenances: Array<{ __typename?: 'Maintenances', id: number, name: string, description: string, dateDone: any, kilometers?: number | null, vehicleId: number }>, revisions: Array<{ __typename?: 'Revisions', id: number, kilometers: number, dateDone: any, vehicleId?: number | null }> } | null };


export const CreateInsuranceDocument = gql`
    mutation CreateInsurance($object: InsurancesInsertInput!) {
  insertInsurancesOne(object: $object) {
    id
  }
}
    `;
export type CreateInsuranceMutationFn = Apollo.MutationFunction<CreateInsuranceMutation, CreateInsuranceMutationVariables>;

/**
 * __useCreateInsuranceMutation__
 *
 * To run a mutation, you first call `useCreateInsuranceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateInsuranceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInsuranceMutation, { data, loading, error }] = useCreateInsuranceMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useCreateInsuranceMutation(baseOptions?: Apollo.MutationHookOptions<CreateInsuranceMutation, CreateInsuranceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateInsuranceMutation, CreateInsuranceMutationVariables>(CreateInsuranceDocument, options);
      }
export type CreateInsuranceMutationHookResult = ReturnType<typeof useCreateInsuranceMutation>;
export type CreateInsuranceMutationResult = Apollo.MutationResult<CreateInsuranceMutation>;
export type CreateInsuranceMutationOptions = Apollo.BaseMutationOptions<CreateInsuranceMutation, CreateInsuranceMutationVariables>;
export const UpdateInsuranceDocument = gql`
    mutation UpdateInsurance($pkColumns: InsurancesPkColumnsInput!, $set: InsurancesSetInput) {
  updateInsurancesByPk(pk_columns: $pkColumns, _set: $set) {
    id
  }
}
    `;
export type UpdateInsuranceMutationFn = Apollo.MutationFunction<UpdateInsuranceMutation, UpdateInsuranceMutationVariables>;

/**
 * __useUpdateInsuranceMutation__
 *
 * To run a mutation, you first call `useUpdateInsuranceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateInsuranceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateInsuranceMutation, { data, loading, error }] = useUpdateInsuranceMutation({
 *   variables: {
 *      pkColumns: // value for 'pkColumns'
 *      set: // value for 'set'
 *   },
 * });
 */
export function useUpdateInsuranceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateInsuranceMutation, UpdateInsuranceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateInsuranceMutation, UpdateInsuranceMutationVariables>(UpdateInsuranceDocument, options);
      }
export type UpdateInsuranceMutationHookResult = ReturnType<typeof useUpdateInsuranceMutation>;
export type UpdateInsuranceMutationResult = Apollo.MutationResult<UpdateInsuranceMutation>;
export type UpdateInsuranceMutationOptions = Apollo.BaseMutationOptions<UpdateInsuranceMutation, UpdateInsuranceMutationVariables>;
export const CreateVehicleDocument = gql`
    mutation CreateVehicle($object: VehiclesInsertInput!) {
  insertVehiclesOne(object: $object) {
    id
    name
  }
}
    `;
export type CreateVehicleMutationFn = Apollo.MutationFunction<CreateVehicleMutation, CreateVehicleMutationVariables>;

/**
 * __useCreateVehicleMutation__
 *
 * To run a mutation, you first call `useCreateVehicleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVehicleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVehicleMutation, { data, loading, error }] = useCreateVehicleMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useCreateVehicleMutation(baseOptions?: Apollo.MutationHookOptions<CreateVehicleMutation, CreateVehicleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateVehicleMutation, CreateVehicleMutationVariables>(CreateVehicleDocument, options);
      }
export type CreateVehicleMutationHookResult = ReturnType<typeof useCreateVehicleMutation>;
export type CreateVehicleMutationResult = Apollo.MutationResult<CreateVehicleMutation>;
export type CreateVehicleMutationOptions = Apollo.BaseMutationOptions<CreateVehicleMutation, CreateVehicleMutationVariables>;
export const UpdateVehicleDocument = gql`
    mutation UpdateVehicle($pkColumns: VehiclesPkColumnsInput!, $set: VehiclesSetInput) {
  updateVehiclesByPk(pk_columns: $pkColumns, _set: $set) {
    id
  }
}
    `;
export type UpdateVehicleMutationFn = Apollo.MutationFunction<UpdateVehicleMutation, UpdateVehicleMutationVariables>;

/**
 * __useUpdateVehicleMutation__
 *
 * To run a mutation, you first call `useUpdateVehicleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVehicleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVehicleMutation, { data, loading, error }] = useUpdateVehicleMutation({
 *   variables: {
 *      pkColumns: // value for 'pkColumns'
 *      set: // value for 'set'
 *   },
 * });
 */
export function useUpdateVehicleMutation(baseOptions?: Apollo.MutationHookOptions<UpdateVehicleMutation, UpdateVehicleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateVehicleMutation, UpdateVehicleMutationVariables>(UpdateVehicleDocument, options);
      }
export type UpdateVehicleMutationHookResult = ReturnType<typeof useUpdateVehicleMutation>;
export type UpdateVehicleMutationResult = Apollo.MutationResult<UpdateVehicleMutation>;
export type UpdateVehicleMutationOptions = Apollo.BaseMutationOptions<UpdateVehicleMutation, UpdateVehicleMutationVariables>;
export const AllInsurancesDocument = gql`
    query AllInsurances {
  insurances {
    id
    title
    firstInstallment
    secondInstallment
    price
    vehicleId
  }
}
    `;

/**
 * __useAllInsurancesQuery__
 *
 * To run a query within a React component, call `useAllInsurancesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllInsurancesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllInsurancesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllInsurancesQuery(baseOptions?: Apollo.QueryHookOptions<AllInsurancesQuery, AllInsurancesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllInsurancesQuery, AllInsurancesQueryVariables>(AllInsurancesDocument, options);
      }
export function useAllInsurancesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllInsurancesQuery, AllInsurancesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllInsurancesQuery, AllInsurancesQueryVariables>(AllInsurancesDocument, options);
        }
export type AllInsurancesQueryHookResult = ReturnType<typeof useAllInsurancesQuery>;
export type AllInsurancesLazyQueryHookResult = ReturnType<typeof useAllInsurancesLazyQuery>;
export type AllInsurancesQueryResult = Apollo.QueryResult<AllInsurancesQuery, AllInsurancesQueryVariables>;
export function refetchAllInsurancesQuery(variables?: AllInsurancesQueryVariables) {
      return { query: AllInsurancesDocument, variables: variables }
    }
export const SingleInsuranceDocument = gql`
    query SingleInsurance($insuranceId: Int!) {
  insurancesByPk(id: $insuranceId) {
    id
    title
    firstInstallment
    secondInstallment
    price
    startDate
    endDate
    suspensionDate
    reactivationDate
    vehicleId
  }
}
    `;

/**
 * __useSingleInsuranceQuery__
 *
 * To run a query within a React component, call `useSingleInsuranceQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleInsuranceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleInsuranceQuery({
 *   variables: {
 *      insuranceId: // value for 'insuranceId'
 *   },
 * });
 */
export function useSingleInsuranceQuery(baseOptions: Apollo.QueryHookOptions<SingleInsuranceQuery, SingleInsuranceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SingleInsuranceQuery, SingleInsuranceQueryVariables>(SingleInsuranceDocument, options);
      }
export function useSingleInsuranceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SingleInsuranceQuery, SingleInsuranceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SingleInsuranceQuery, SingleInsuranceQueryVariables>(SingleInsuranceDocument, options);
        }
export type SingleInsuranceQueryHookResult = ReturnType<typeof useSingleInsuranceQuery>;
export type SingleInsuranceLazyQueryHookResult = ReturnType<typeof useSingleInsuranceLazyQuery>;
export type SingleInsuranceQueryResult = Apollo.QueryResult<SingleInsuranceQuery, SingleInsuranceQueryVariables>;
export function refetchSingleInsuranceQuery(variables: SingleInsuranceQueryVariables) {
      return { query: SingleInsuranceDocument, variables: variables }
    }
export const AllVehiclesDocument = gql`
    query AllVehicles {
  vehicles {
    id
    name
    licensePlate
    buildDate
    image
  }
}
    `;

/**
 * __useAllVehiclesQuery__
 *
 * To run a query within a React component, call `useAllVehiclesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllVehiclesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllVehiclesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllVehiclesQuery(baseOptions?: Apollo.QueryHookOptions<AllVehiclesQuery, AllVehiclesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllVehiclesQuery, AllVehiclesQueryVariables>(AllVehiclesDocument, options);
      }
export function useAllVehiclesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllVehiclesQuery, AllVehiclesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllVehiclesQuery, AllVehiclesQueryVariables>(AllVehiclesDocument, options);
        }
export type AllVehiclesQueryHookResult = ReturnType<typeof useAllVehiclesQuery>;
export type AllVehiclesLazyQueryHookResult = ReturnType<typeof useAllVehiclesLazyQuery>;
export type AllVehiclesQueryResult = Apollo.QueryResult<AllVehiclesQuery, AllVehiclesQueryVariables>;
export function refetchAllVehiclesQuery(variables?: AllVehiclesQueryVariables) {
      return { query: AllVehiclesDocument, variables: variables }
    }
export const SingleVehicleDocument = gql`
    query SingleVehicle($vehicleId: Int!) {
  vehiclesByPk(id: $vehicleId) {
    id
    name
    licensePlate
    buildDate
    image
    insurances {
      id
      price
      title
      firstInstallment
      secondInstallment
      reactivationDate
      startDate
      suspensionDate
      vehicleId
    }
    maintenances {
      id
      name
      description
      dateDone
      kilometers
      vehicleId
    }
    revisions {
      id
      kilometers
      dateDone
      vehicleId
    }
  }
}
    `;

/**
 * __useSingleVehicleQuery__
 *
 * To run a query within a React component, call `useSingleVehicleQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleVehicleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleVehicleQuery({
 *   variables: {
 *      vehicleId: // value for 'vehicleId'
 *   },
 * });
 */
export function useSingleVehicleQuery(baseOptions: Apollo.QueryHookOptions<SingleVehicleQuery, SingleVehicleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SingleVehicleQuery, SingleVehicleQueryVariables>(SingleVehicleDocument, options);
      }
export function useSingleVehicleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SingleVehicleQuery, SingleVehicleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SingleVehicleQuery, SingleVehicleQueryVariables>(SingleVehicleDocument, options);
        }
export type SingleVehicleQueryHookResult = ReturnType<typeof useSingleVehicleQuery>;
export type SingleVehicleLazyQueryHookResult = ReturnType<typeof useSingleVehicleLazyQuery>;
export type SingleVehicleQueryResult = Apollo.QueryResult<SingleVehicleQuery, SingleVehicleQueryVariables>;
export function refetchSingleVehicleQuery(variables: SingleVehicleQueryVariables) {
      return { query: SingleVehicleDocument, variables: variables }
    }