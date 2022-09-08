/* tslint:disable */
/* eslint-disable */
/**
 * CV Manager
 * Cuccato Veicoli Manager API
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface CreateVehicleDto
 */
export interface CreateVehicleDto {
    /**
     * 
     * @type {string}
     * @memberof CreateVehicleDto
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof CreateVehicleDto
     */
    'licensePlate': string;
    /**
     * 
     * @type {string}
     * @memberof CreateVehicleDto
     */
    'buildDate': string;
}
/**
 * 
 * @export
 * @interface UpdateVehicleDto
 */
export interface UpdateVehicleDto {
    /**
     * 
     * @type {string}
     * @memberof UpdateVehicleDto
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateVehicleDto
     */
    'licensePlate'?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateVehicleDto
     */
    'buildDate'?: string;
}
/**
 * 
 * @export
 * @interface VehicleEntity
 */
export interface VehicleEntity {
    /**
     * 
     * @type {number}
     * @memberof VehicleEntity
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof VehicleEntity
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof VehicleEntity
     */
    'licensePlate': string;
    /**
     * 
     * @type {string}
     * @memberof VehicleEntity
     */
    'buildDate': string;
    /**
     * 
     * @type {string}
     * @memberof VehicleEntity
     */
    'createdAt': string;
    /**
     * 
     * @type {string}
     * @memberof VehicleEntity
     */
    'updatedAt': string;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        appControllerGetHello: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        appControllerGetHelloDiff: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/hello`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async appControllerGetHello(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.appControllerGetHello(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async appControllerGetHelloDiff(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.appControllerGetHelloDiff(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        appControllerGetHello(options?: any): AxiosPromise<void> {
            return localVarFp.appControllerGetHello(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        appControllerGetHelloDiff(options?: any): AxiosPromise<void> {
            return localVarFp.appControllerGetHelloDiff(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public appControllerGetHello(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).appControllerGetHello(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public appControllerGetHelloDiff(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).appControllerGetHelloDiff(options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * VehiclesApi - axios parameter creator
 * @export
 */
export const VehiclesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CreateVehicleDto} createVehicleDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        vehiclesControllerCreate: async (createVehicleDto: CreateVehicleDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createVehicleDto' is not null or undefined
            assertParamExists('vehiclesControllerCreate', 'createVehicleDto', createVehicleDto)
            const localVarPath = `/vehicles`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createVehicleDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        vehiclesControllerFindAll: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/vehicles`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        vehiclesControllerFindOne: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('vehiclesControllerFindOne', 'id', id)
            const localVarPath = `/vehicles/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        vehiclesControllerFindOneWithRelatios: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('vehiclesControllerFindOneWithRelatios', 'id', id)
            const localVarPath = `/vehicles/full/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        vehiclesControllerRemove: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('vehiclesControllerRemove', 'id', id)
            const localVarPath = `/vehicles/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {UpdateVehicleDto} updateVehicleDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        vehiclesControllerUpdate: async (id: string, updateVehicleDto: UpdateVehicleDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('vehiclesControllerUpdate', 'id', id)
            // verify required parameter 'updateVehicleDto' is not null or undefined
            assertParamExists('vehiclesControllerUpdate', 'updateVehicleDto', updateVehicleDto)
            const localVarPath = `/vehicles/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateVehicleDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * VehiclesApi - functional programming interface
 * @export
 */
export const VehiclesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = VehiclesApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {CreateVehicleDto} createVehicleDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async vehiclesControllerCreate(createVehicleDto: CreateVehicleDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<VehicleEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.vehiclesControllerCreate(createVehicleDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async vehiclesControllerFindAll(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<VehicleEntity>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.vehiclesControllerFindAll(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async vehiclesControllerFindOne(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<VehicleEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.vehiclesControllerFindOne(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async vehiclesControllerFindOneWithRelatios(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<VehicleEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.vehiclesControllerFindOneWithRelatios(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async vehiclesControllerRemove(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<VehicleEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.vehiclesControllerRemove(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} id 
         * @param {UpdateVehicleDto} updateVehicleDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async vehiclesControllerUpdate(id: string, updateVehicleDto: UpdateVehicleDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<VehicleEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.vehiclesControllerUpdate(id, updateVehicleDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * VehiclesApi - factory interface
 * @export
 */
export const VehiclesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = VehiclesApiFp(configuration)
    return {
        /**
         * 
         * @param {CreateVehicleDto} createVehicleDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        vehiclesControllerCreate(createVehicleDto: CreateVehicleDto, options?: any): AxiosPromise<VehicleEntity> {
            return localVarFp.vehiclesControllerCreate(createVehicleDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        vehiclesControllerFindAll(options?: any): AxiosPromise<Array<VehicleEntity>> {
            return localVarFp.vehiclesControllerFindAll(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        vehiclesControllerFindOne(id: string, options?: any): AxiosPromise<VehicleEntity> {
            return localVarFp.vehiclesControllerFindOne(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        vehiclesControllerFindOneWithRelatios(id: string, options?: any): AxiosPromise<VehicleEntity> {
            return localVarFp.vehiclesControllerFindOneWithRelatios(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        vehiclesControllerRemove(id: string, options?: any): AxiosPromise<VehicleEntity> {
            return localVarFp.vehiclesControllerRemove(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} id 
         * @param {UpdateVehicleDto} updateVehicleDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        vehiclesControllerUpdate(id: string, updateVehicleDto: UpdateVehicleDto, options?: any): AxiosPromise<VehicleEntity> {
            return localVarFp.vehiclesControllerUpdate(id, updateVehicleDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * VehiclesApi - object-oriented interface
 * @export
 * @class VehiclesApi
 * @extends {BaseAPI}
 */
export class VehiclesApi extends BaseAPI {
    /**
     * 
     * @param {CreateVehicleDto} createVehicleDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VehiclesApi
     */
    public vehiclesControllerCreate(createVehicleDto: CreateVehicleDto, options?: AxiosRequestConfig) {
        return VehiclesApiFp(this.configuration).vehiclesControllerCreate(createVehicleDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VehiclesApi
     */
    public vehiclesControllerFindAll(options?: AxiosRequestConfig) {
        return VehiclesApiFp(this.configuration).vehiclesControllerFindAll(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VehiclesApi
     */
    public vehiclesControllerFindOne(id: string, options?: AxiosRequestConfig) {
        return VehiclesApiFp(this.configuration).vehiclesControllerFindOne(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VehiclesApi
     */
    public vehiclesControllerFindOneWithRelatios(id: string, options?: AxiosRequestConfig) {
        return VehiclesApiFp(this.configuration).vehiclesControllerFindOneWithRelatios(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VehiclesApi
     */
    public vehiclesControllerRemove(id: string, options?: AxiosRequestConfig) {
        return VehiclesApiFp(this.configuration).vehiclesControllerRemove(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} id 
     * @param {UpdateVehicleDto} updateVehicleDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VehiclesApi
     */
    public vehiclesControllerUpdate(id: string, updateVehicleDto: UpdateVehicleDto, options?: AxiosRequestConfig) {
        return VehiclesApiFp(this.configuration).vehiclesControllerUpdate(id, updateVehicleDto, options).then((request) => request(this.axios, this.basePath));
    }
}


