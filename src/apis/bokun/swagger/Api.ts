/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export enum VendorContractStatusDto {
  PROPOSED_BY_SELLER = "PROPOSED_BY_SELLER",
  PROPOSED_BY_SUPPLIER = "PROPOSED_BY_SUPPLIER",
  TERMS_REQUESTED_BY_SELLER = "TERMS_REQUESTED_BY_SELLER",
  REJECTED_BY_SELLER = "REJECTED_BY_SELLER",
  REJECTED_BY_SUPPLIER = "REJECTED_BY_SUPPLIER",
  ACCEPTED = "ACCEPTED",
  CANCELLED_BY_SELLER = "CANCELLED_BY_SELLER",
  CANCELLED_BY_SUPPLIER = "CANCELLED_BY_SUPPLIER",
  ABORTED_BY_SELLER = "ABORTED_BY_SELLER",
  ABORTED_BY_SUPPLIER = "ABORTED_BY_SUPPLIER",
  TIMEOUT = "TIMEOUT",
}

export enum TicketCategoryDto {
  ADULT = "ADULT",
  CHILD = "CHILD",
  TEENAGER = "TEENAGER",
  INFANT = "INFANT",
  SENIOR = "SENIOR",
  STUDENT = "STUDENT",
  MILITARY = "MILITARY",
  GROUP = "GROUP",
  OTHER = "OTHER",
}

/**
 * This object mimics Java's `java.math.RoundingMode`:
 * * `UP` - Rounding mode to round away from zero. Always increments the digit prior to a non-zero discarded
 *   fraction. Note that this rounding mode never decreases the magnitude of the calculated value.
 * * `DOWN` - Rounding mode to round towards zero. Never increments the digit prior to a discarded fraction (i.e.,
 *   truncates). Note that this rounding mode never increases the magnitude of the calculated value.
 * * `CEILING` - Rounding mode to round towards positive infinity. If the result is positive, behaves as for `UP`;
 *   if negative, behaves as for `DOWN`. Note that this rounding mode never decreases the calculated value.
 * * `FLOOR` - Rounding mode to round towards negative infinity. If the result is positive, behave as for `DOWN`;
 *   if negative, behave as for `UP`. Note that this rounding mode never increases the calculated value.
 * * `HALF_UP` - Rounding mode to round towards "nearest neighbor" unless both neighbors are equidistant, in which
 *   case round up. Behaves as for `UP` if the discarded fraction is ≥ 0.5; otherwise, behaves as for `DOWN`. Note
 *   that this is the rounding mode commonly taught at school.
 * * `HALF_DOWN` - Rounding mode to round towards "nearest neighbor" unless both neighbors are equidistant, in
 *   which case round down. Behaves as for `UP` if the discarded fraction is > 0.5; otherwise, behaves as for
 *   `DOWN`.
 * * `HALF_EVEN` - Rounding mode to round towards the "nearest neighbor" unless both neighbors are equidistant, in
 *   which case, round towards the even neighbor. Behaves as for `HALF_UP` if the digit to the left of the
 *   discarded fraction is odd; behaves as for `HALF_DOWN` if it's even. Note that this is the rounding mode that
 *   statistically minimizes cumulative error when applied repeatedly over a sequence of calculations. It is
 *   sometimes known as "Banker's rounding," and is chiefly used in the USA.
 * * `UNNECESSARY` - Rounding mode to assert that the requested operation has an exact result, hence no rounding
 *   is necessary.
 */
export enum RoundingModeDto {
  UP = "UP",
  DOWN = "DOWN",
  CEILING = "CEILING",
  FLOOR = "FLOOR",
  HALF_UP = "HALF_UP",
  HALF_DOWN = "HALF_DOWN",
  HALF_EVEN = "HALF_EVEN",
  UNNECESSARY = "UNNECESSARY",
}

export enum ResourceAllocationPolicyDto {
  ROUND_ROBIN = "ROUND_ROBIN",
  ORDERLY = "ORDERLY",
  EMPTY_THEN_STICK = "EMPTY_THEN_STICK",
  EMPTY_THEN_PRIVATE = "EMPTY_THEN_PRIVATE",
  MANUAL = "MANUAL",
}

export enum PaymentTypeDto {
  WEB_PAYMENT = "WEB_PAYMENT",
  POINT_OF_SALE = "POINT_OF_SALE",
  CASH = "CASH",
  VOUCHER = "VOUCHER",
  GIFT_CARD = "GIFT_CARD",
  ROOM_CHARGE = "ROOM_CHARGE",
  BANK_TRANSFER = "BANK_TRANSFER",
  POS_TERMINAL = "POS_TERMINAL",
}

export enum PassExpiryTypeDto {
  NEVER = "NEVER",
  FIXED_DATE = "FIXED_DATE",
  RELATIVE_DATE = "RELATIVE_DATE",
}

export enum MonthDto {
  JANUARY = "JANUARY",
  FEBRUARY = "FEBRUARY",
  MARCH = "MARCH",
  APRIL = "APRIL",
  MAY = "MAY",
  JUNE = "JUNE",
  JULY = "JULY",
  AUGUST = "AUGUST",
  SEPTEMBER = "SEPTEMBER",
  OCTOBER = "OCTOBER",
  NOVEMBER = "NOVEMBER",
  DECEMBER = "DECEMBER",
}

export enum ExtraTypeDto {
  FOOD = "FOOD",
  DRINKS = "DRINKS",
  SAFETY = "SAFETY",
  TRANSPORT = "TRANSPORT",
  DONATION = "DONATION",
  OTHERS = "OTHERS",
}

export enum ExperienceTypeDto {
  DAY_TOUR_OR_ACTIVITY = "DAY_TOUR_OR_ACTIVITY",
  ATTRACTION = "ATTRACTION",
  EVENT = "EVENT",
  TRANSPORT = "TRANSPORT",
  MULTI_DAY_TOUR = "MULTI_DAY_TOUR",
}

export enum ExperienceThemeDto {
  FAMILY_FRIENDLY = "FAMILY_FRIENDLY",
  ECO_FRIENDLY = "ECO_FRIENDLY",
  ROMANTIC = "ROMANTIC",
  LUXURY = "LUXURY",
  RAINY_DAY = "RAINY_DAY",
  SKIP_THE_LINE = "SKIP_THE_LINE",
  GROUP_FRIENDLY = "GROUP_FRIENDLY",
  INDOOR = "INDOOR",
  OUTDOOR = "OUTDOOR",
  PRIVATE_ACTIVITY = "PRIVATE_ACTIVITY",
  TAILOR_MADE = "TAILOR_MADE",
  BEACH = "BEACH",
  ADULTS_ONLY = "ADULTS_ONLY",
  COUPLES = "COUPLES",
  SENIOR = "SENIOR",
  YOUTH = "YOUTH",
  VOLUNTEERS = "VOLUNTEERS",
}

export enum ExperienceKnowBeforeYouGoTypeDto {
  STROLLER_OR_PRAM_ACCESSIBLE = "STROLLER_OR_PRAM_ACCESSIBLE",
  WHEELCHAIR_ACCESSIBLE = "WHEELCHAIR_ACCESSIBLE",
  LIMITED_MOBILITY_ACCESSIBLE = "LIMITED_MOBILITY_ACCESSIBLE",
  LIMITED_SIGHT_ACCESSIBLE = "LIMITED_SIGHT_ACCESSIBLE",
  ANIMALS_OR_PETS_ALLOWED = "ANIMALS_OR_PETS_ALLOWED",
  PUBLIC_TRANSPORTATION_NEARBY = "PUBLIC_TRANSPORTATION_NEARBY",
  INFANT_SEATS_AVAILABLE = "INFANT_SEATS_AVAILABLE",
  INFANTS_MUST_SIT_ON_LAPS = "INFANTS_MUST_SIT_ON_LAPS",
  PASSPORT_REQUIRED = "PASSPORT_REQUIRED",
  DRESS_CODE = "DRESS_CODE",
}

export enum ExperienceMeetingTypeDto {
  MEET_ON_LOCATION = "MEET_ON_LOCATION",
  PICK_UP = "PICK_UP",
  MEET_ON_LOCATION_OR_PICK_UP = "MEET_ON_LOCATION_OR_PICK_UP",
}

export enum ExperienceInclusionExclusionTypeDto {
  ENTRY_OR_ADMISSION_FEE = "ENTRY_OR_ADMISSION_FEE",
  FUEL_SURCHARGE = "FUEL_SURCHARGE",
  LANDING_AND_FACILITY_FEES = "LANDING_AND_FACILITY_FEES",
  PARKING_FEES = "PARKING_FEES",
  ENTRY_TAX = "ENTRY_TAX",
  DEPARTURE_TAX = "DEPARTURE_TAX",
  NATIONAL_PARK_ENTRANCE_FEE = "NATIONAL_PARK_ENTRANCE_FEE",
  GOODS_AND_SERVICES_TAX = "GOODS_AND_SERVICES_TAX",
  TIP_OR_GRATUITY = "TIP_OR_GRATUITY",
  FOOD_AND_DRINKS = "FOOD_AND_DRINKS",
  WIFI = "WIFI",
  BUS_FARE = "BUS_FARE",
}

export enum ExperienceGuidanceTypeDto {
  GUIDED = "GUIDED",
  HEADPHONES = "HEADPHONES",
  READING_MATERIAL = "READING_MATERIAL",
}

export enum ExperienceExtraSelectionTypeDto {
  OPTIONAL = "OPTIONAL",
  PRESELECTED = "PRESELECTED",
}

export enum ExperienceDifficultyDto {
  VERY_EASY = "VERY_EASY",
  EASY = "EASY",
  MODERATE = "MODERATE",
  CHALLENGING = "CHALLENGING",
  DEMANDING = "DEMANDING",
  EXTREME = "EXTREME",
}

export enum ExperienceCutoffTypeDto {
  RELATIVE_TO_START_TIME = "RELATIVE_TO_START_TIME",
  RELATIVE_TO_WORKING_HOURS_OPEN = "RELATIVE_TO_WORKING_HOURS_OPEN",
  RELATIVE_TO_WORKING_HOURS_CLOSE = "RELATIVE_TO_WORKING_HOURS_CLOSE",
  RELATIVE_TO_ONE_SET_TIME = "RELATIVE_TO_ONE_SET_TIME",
}

export enum ExperienceComponentTypeDto {
  ACTIVATION = "ACTIVATION",
  ALL = "ALL",
  ALLOW_CUSTOMIZED_BOOKINGS = "ALLOW_CUSTOMIZED_BOOKINGS",
  ATTENTION = "ATTENTION",
  AVAILABILITY_RULES = "AVAILABILITY_RULES",
  BOOKING_LABELS = "BOOKING_LABELS",
  BOOKING_QUESTIONS = "BOOKING_QUESTIONS",
  BOOKING_TYPE = "BOOKING_TYPE",
  BOX_SETTINGS = "BOX_SETTINGS",
  CAPACITY_TYPE = "CAPACITY_TYPE",
  CATEGORIES = "CATEGORIES",
  COMBO = "COMBO",
  COMMISSION_GROUP_ID = "COMMISSION_GROUP_ID",
  CREATED = "CREATED",
  CUSTOM_INPUT_FIELD_VALUES = "CUSTOM_INPUT_FIELD_VALUES",
  CUTOFF = "CUTOFF",
  DEFAULT_OPENING_HOURS = "DEFAULT_OPENING_HOURS",
  DESCRIPTION = "DESCRIPTION",
  DIFFICULTY_LEVEL = "DIFFICULTY_LEVEL",
  DURATION = "DURATION",
  EARLY_BOOKING_LIMIT = "EARLY_BOOKING_LIMIT",
  EXCLUDED = "EXCLUDED",
  EXCLUSIONS = "EXCLUSIONS",
  EXTERNAL_ID = "EXTERNAL_ID",
  EXTRAS = "EXTRAS",
  FLAGS = "FLAGS",
  GUIDANCE_TYPES = "GUIDANCE_TYPES",
  INCLUDED = "INCLUDED",
  INCLUSIONS = "INCLUSIONS",
  INVENTORY_SETTINGS = "INVENTORY_SETTINGS",
  ITINERARY = "ITINERARY",
  KEYWORDS = "KEYWORDS",
  KNOW_BEFORE_YOU_GO = "KNOW_BEFORE_YOU_GO",
  LAST_MODIFIED = "LAST_MODIFIED",
  LOCATION = "LOCATION",
  MAIN_PAX_INFO = "MAIN_PAX_INFO",
  MARKETPLACE = "MARKETPLACE",
  MEETING_TYPE = "MEETING_TYPE",
  MIN_AGE = "MIN_AGE",
  ON_REQUEST_DEADLINE = "ON_REQUEST_DEADLINE",
  OTHER_PAX_INFO = "OTHER_PAX_INFO",
  PASS_SETTINGS = "PASS_SETTINGS",
  PHOTOS = "PHOTOS",
  PRICING = "PRICING",
  PRICING_CATEGORIES = "PRICING_CATEGORIES",
  PRIVATE_EXPERIENCE = "PRIVATE_EXPERIENCE",
  RATES = "RATES",
  REQUIREMENTS = "REQUIREMENTS",
  RETURN_PRODUCT_ID = "RETURN_PRODUCT_ID",
  SEASONAL_OPENING_HOURS = "SEASONAL_OPENING_HOURS",
  SHORT_DESCRIPTION = "SHORT_DESCRIPTION",
  START_TIMES = "START_TIMES",
  THEMES = "THEMES",
  TICKET = "TICKET",
  TIME_ZONE = "TIME_ZONE",
  TITLE = "TITLE",
  TYPE = "TYPE",
  VIDEOS = "VIDEOS",
  ID = "ID",
  RESERVATION_TIMEOUT = "RESERVATION_TIMEOUT",
}

export enum ExperienceCategoryDto {
  WALKING_TOUR = "WALKING_TOUR",
  BUS_OR_MINIVAN_TOUR = "BUS_OR_MINIVAN_TOUR",
  AIR_OR_HELICOPTER_TOUR = "AIR_OR_HELICOPTER_TOUR",
  SAILING_OR_BOAT_TOUR = "SAILING_OR_BOAT_TOUR",
  PRIVATE_CAR_TOUR = "PRIVATE_CAR_TOUR",
  SEAT_IN_COACH_TOUR = "SEAT_IN_COACH_TOUR",
  SEGWAY_TOUR = "SEGWAY_TOUR",
  SNOWMOBILE_TOUR = "SNOWMOBILE_TOUR",
  ATV_OR_QUAD_TOUR = "ATV_OR_QUAD_TOUR",
  BIKE_TOUR = "BIKE_TOUR",
  HOP_ON_HOP_OFF_TOUR = "HOP_ON_HOP_OFF_TOUR",
  TOURIST_PASS = "TOURIST_PASS",
  RAIL_PASS = "RAIL_PASS",
  AMUSEMENT_PARK = "AMUSEMENT_PARK",
  AIRPORT_LOUNGE = "AIRPORT_LOUNGE",
  SHOWS_AND_MUSICALS = "SHOWS_AND_MUSICALS",
  SPECTATOR_SPORTS = "SPECTATOR_SPORTS",
  FESTIVAL = "FESTIVAL",
  MUSEUMS_AND_EXHIBITIONS = "MUSEUMS_AND_EXHIBITIONS",
  SIGHTSEEING_ATTRACTION = "SIGHTSEEING_ATTRACTION",
  ZOOS_AND_AQUARIUMS = "ZOOS_AND_AQUARIUMS",
  SIGHTSEEING = "SIGHTSEEING",
  ARTS_AND_CULTURE = "ARTS_AND_CULTURE",
  CLASSES_AND_WORKSHOPS = "CLASSES_AND_WORKSHOPS",
  CULINARY = "CULINARY",
  NIGHTLIFE = "NIGHTLIFE",
  SHOPPING = "SHOPPING",
  PHOTOGRAPHY = "PHOTOGRAPHY",
  TV_AND_MOVIES = "TV_AND_MOVIES",
  ESCAPE_GAME = "ESCAPE_GAME",
  SPA_AND_WELLNESS = "SPA_AND_WELLNESS",
  ADVENTURE = "ADVENTURE",
  WATER = "WATER",
  NATURE = "NATURE",
  SAFARI_AND_WILDLIFE = "SAFARI_AND_WILDLIFE",
  BIRDWATCHING = "BIRDWATCHING",
  DOLPHIN_OR_WHALEWATCHING = "DOLPHIN_OR_WHALEWATCHING",
  SURFING = "SURFING",
  CANOEING = "CANOEING",
  CAVING = "CAVING",
  CLIMBING = "CLIMBING",
  DIVING = "DIVING",
  GLACIER_HIKING = "GLACIER_HIKING",
  HIKING = "HIKING",
  HORSEBACK_RIDING = "HORSEBACK_RIDING",
  ICE_CLIMBING = "ICE_CLIMBING",
  KAYAKING = "KAYAKING",
  RAFTING = "RAFTING",
  SEA_ANGLING = "SEA_ANGLING",
  HUNTING = "HUNTING",
  FISHING = "FISHING",
  SKIING = "SKIING",
  SNORKELING = "SNORKELING",
  SELF_DRIVE_TOUR = "SELF_DRIVE_TOUR",
  PRIVATE_ROUNDRIP = "PRIVATE_ROUNDRIP",
  MINI_CRUISE = "MINI_CRUISE",
  CITY_BREAK = "CITY_BREAK",
  SHORT_BREAK = "SHORT_BREAK",
  SUN_AND_BEACH = "SUN_AND_BEACH",
  PILGRIMAGE_OR_RELIGION = "PILGRIMAGE_OR_RELIGION",
  MOTORCYCLE_TOURS = "MOTORCYCLE_TOURS",
  MOUNTAIN_BIKE = "MOUNTAIN_BIKE",
  GOLF = "GOLF",
  MULTISPORT = "MULTISPORT",
  EDUCATIONAL_TOUR = "EDUCATIONAL_TOUR",
  LANGUAGE_TOUR = "LANGUAGE_TOUR",
  MEDICAL_TOUR = "MEDICAL_TOUR",
  CULTURAL_AND_THEME_TOURS = "CULTURAL_AND_THEME_TOURS",
  DAY_TRIPS_AND_EXCURSIONS = "DAY_TRIPS_AND_EXCURSIONS",
  HOLIDAY_AND_SEASONAL_TOURS = "HOLIDAY_AND_SEASONAL_TOURS",
  LUXURY_AND_SPECIAL_OCCASIONS = "LUXURY_AND_SPECIAL_OCCASIONS",
  OBSTACLE_COURSES = "OBSTACLE_COURSES",
  ADRENALINE_AND_EXTREME = "ADRENALINE_AND_EXTREME",
  PAINTBALL = "PAINTBALL",
  PARAGLIDING = "PARAGLIDING",
  RUNNING = "RUNNING",
  SHORE_EXCURSIONS = "SHORE_EXCURSIONS",
  THEME_PARKS = "THEME_PARKS",
  TROLLEY_TOURS = "TROLLEY_TOURS",
  LAYOVER_TOURS = "LAYOVER_TOURS",
  CLASSIC_CAR_TOURS = "CLASSIC_CAR_TOURS",
  UNDERGROUND_TOURS = "UNDERGROUND_TOURS",
  PLANTATION_TOURS = "PLANTATION_TOURS",
  HORSE_CARRIAGE_RIDE = "HORSE_CARRIAGE_RIDE",
  SKIP_THE_LINE = "SKIP_THE_LINE",
  CITY_TOURS = "CITY_TOURS",
  TRANSFERS_AND_GROUND_TRANSPORT = "TRANSFERS_AND_GROUND_TRANSPORT",
  VIP_AND_EXCLUSIVE = "VIP_AND_EXCLUSIVE",
  WEDDING_AND_HONEYMOON = "WEDDING_AND_HONEYMOON",
  EBIKE_TOUR = "EBIKE_TOUR",
  BUS_TOUR = "BUS_TOUR",
  MINIVAN_TOUR = "MINIVAN_TOUR",
  JET_SKI_TOUR = "JET_SKI_TOUR",
}

export enum ExperienceCapacityTypeDto {
  FREE_SALE = "FREE_SALE",
  LIMITED = "LIMITED",
  ON_REQUEST = "ON_REQUEST",
}

export enum ExperienceBookingQuestionTriggerSelectionDto {
  ANY = "ANY",
  SELECTED_ONLY = "SELECTED_ONLY",
}

export enum ExperienceBookingQuestionDataTypeDto {
  SHORT_TEXT = "SHORT_TEXT",
  LONG_TEXT = "LONG_TEXT",
  INT = "INT",
  DOUBLE = "DOUBLE",
  BOOLEAN = "BOOLEAN",
  CHECKBOX_TOGGLE = "CHECKBOX_TOGGLE",
  DATE = "DATE",
  DATE_AND_TIME = "DATE_AND_TIME",
  OPTIONS = "OPTIONS",
}

export enum ExperienceBookingQuestionContextDto {
  BOOKING = "BOOKING",
  PASSENGER = "PASSENGER",
  EXTRA = "EXTRA",
}

export enum ExperienceBookingTypeDto {
  PASS = "PASS",
  DATE = "DATE",
  DATE_AND_TIME = "DATE_AND_TIME",
}

export enum MarketplaceVisibilityTypeDto {
  PUBLIC = "PUBLIC",
  PRIVATE = "PRIVATE",
  UNLISTED = "UNLISTED",
}

export enum EarlyBookingLimitType {
  UNLIMITED = "UNLIMITED",
  SPECIFIC_DATE_TIME = "SPECIFIC_DATE_TIME",
  RELATIVE_TO_TRAVEL_DATE_SPECIFIC_TIME = "RELATIVE_TO_TRAVEL_DATE_SPECIFIC_TIME",
  MONTHS_BEFORE_TRAVEL_DATE_SPECIFIC_TIME = "MONTHS_BEFORE_TRAVEL_DATE_SPECIFIC_TIME",
}

export enum DayOfWeekDto {
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY",
}

/** an enum containing all possible types of customer information that is collected by the system during the booking process */
export enum ContactInformationTypeDto {
  TITLE = "TITLE",
  FIRST_NAME = "FIRST_NAME",
  LAST_NAME = "LAST_NAME",
  PERSONAL_ID_NUMBER = "PERSONAL_ID_NUMBER",
  EMAIL = "EMAIL",
  PHONE_NUMBER = "PHONE_NUMBER",
  NATIONALITY = "NATIONALITY",
  GENDER = "GENDER",
  ORGANIZATION = "ORGANIZATION",
  PASSPORT_ID = "PASSPORT_ID",
  PASSPORT_EXPIRY = "PASSPORT_EXPIRY",
  ADDRESS = "ADDRESS",
  DATE_OF_BIRTH = "DATE_OF_BIRTH",
  LANGUAGE = "LANGUAGE",
}

export enum CancellationPolicyTypeDto {
  NON_REFUNDABLE = "NON_REFUNDABLE",
  FULL_REFUND = "FULL_REFUND",
  SIMPLE = "SIMPLE",
  ADVANCED = "ADVANCED",
}

export enum CancellationPolicyPenaltyRuleChargeTypeDto {
  AMOUNT = "AMOUNT",
  PERCENTAGE = "PERCENTAGE",
}

export enum BookingInvoicesRequestTypeDto {
  ALL = "ALL",
  AGENT = "AGENT",
  AFFILIATE = "AFFILIATE",
  CUSTOMER = "CUSTOMER",
  SELLER = "SELLER",
}

export enum BarcodeFormatDto {
  QR_CODE = "QR_CODE",
  CODE_128 = "CODE_128",
  PDF_417 = "PDF_417",
  DATA_MATRIX = "DATA_MATRIX",
  AZTEC = "AZTEC",
  NONE = "NONE",
}

export enum AllowedChangeIntervalDto {
  ALWAYS = "ALWAYS",
  BEFORE = "BEFORE",
  AFTER = "AFTER",
  NEVER = "NEVER",
}

export enum AddonSelectionTypeDto {
  OPTIONAL = "OPTIONAL",
  PRESELECTED = "PRESELECTED",
  UNAVAILABLE = "UNAVAILABLE",
}

export enum AddonPricingTypeDto {
  INCLUDED_IN_PRICE = "INCLUDED_IN_PRICE",
  PRICED_SEPARATELY = "PRICED_SEPARATELY",
}

/** wrapper for keeping active and historic seller invoices. */
export interface ActiveHistoricSellerInvoicesDto {
  activeSellerInvoice?: SellerInvoiceDto;
  /** previous seller invoices for this booking (if they exist and the requester has access to them), otherwise empty list */
  historicSellerInvoices: SellerInvoiceDto[];
}

/** an object to hold address details */
export interface AddressDto {
  /**
   * ID of this address object
   * @format int64
   */
  id?: number;
  /** @maxLength 255 */
  addressLine1?: string;
  /** @maxLength 255 */
  addressLine2?: string;
  /** @maxLength 255 */
  addressLine3?: string;
  /** @maxLength 255 */
  city?: string;
  /** @maxLength 255 */
  state?: string;
  /** @maxLength 255 */
  postalCode?: string;
  /**
   * ISO 3166-1 alpha-2 country code. Served as upper case.
   * @minLength 2
   * @maxLength 2
   */
  countryCode?: string;
  /**
   * latitude, as per ISO 6709
   * @format double
   * @min -90
   * @max 90
   */
  latitude?: number;
  /**
   * longitude, as per ISO 6709
   * @format double
   * @min -180
   * @max 180
   */
  longitude?: number;
  /**
   * Google Place ID for this address. Note that in some cases all other items, such as address line 1 etc. might be missing and only this element might be present.
   * @maxLength 255
   */
  googlePlaceId?: string;
}

export type AffiliateInvoiceDto = CommonInvoiceDto & {
  /**
   * ID of the vendor (MarketplaceVendorDto::ID) who is the recipient of this invoice
   * @format int64
   */
  recipientVendorId: number;
  /**
   * ID of the affiliate (`AffiliateDto::id`, TBD) who has issued this invoice. Optional.
   * @format int64
   */
  issuerAffiliateId?: number;
  /**
   * ID of the vendor (MarketplaceVendorDto::ID) who has issued this invoice. Optional.
   * @format int64
   */
  issuerVendorId?: number;
  /**
   * ID of the agent (AgentDto::ID, TBD) who has issued this invoice. Optional.
   * @format int64
   */
  issuerAgentId?: number;
};

export type AgentInvoiceDto = CommonInvoiceDto & {
  /**
   * ID of the vendor (MarketplaceVendorDto::ID) who has issued this invoice.
   * @format int64
   */
  issuerVendorId: number;
  /**
   * ID of agent (`AgentDto::id`, TBD) who has assisted with this sale and is the recipient of this invoice
   * @format int64
   */
  recipientAgentId?: number;
};

export interface BookingInvoicesDto {
  /**
   * ID of the booking these invoices are for
   * @format int64
   */
  bookingId: number;
  activeCustomerInvoice?: CustomerInvoiceDto;
  /** previous customer invoices for this booking (if they exist and the requester has access to it), otherwise empty list */
  historicCustomerInvoices: CustomerInvoiceDto[];
  activeAffiliateInvoice?: AffiliateInvoiceDto;
  /** previous affiliate invoices for this booking (if they exist and the requester has access to them), otherwise empty list */
  historicAffiliateInvoices: AffiliateInvoiceDto[];
  activeAgentInvoice?: AgentInvoiceDto;
  /** previous agent invoices for this booking (if they exist and the requester has access to them), otherwise empty list */
  historicAgentInvoices: AgentInvoiceDto[];
  /** a map where keys are activity booking IDs in string format, and value is object pointing to active/historic invoices */
  sellerInvoices: Record<string, ActiveHistoricSellerInvoicesDto>;
}

export type CancellationPoliciesPagedListDto = PagedListDto & {
  items: CancellationPolicyDto[];
};

export interface CancellationPolicyDto {
  /**
   * id of this object
   * @format int64
   */
  id?: number;
  /** @maxLength 140 */
  title: string;
  type: CancellationPolicyTypeDto;
  /** Number of milliseconds since January 1, 1970, 00:00:00 UTC */
  created?: TimestampDto;
  /**
   * reference to `TaxDto::id`. This tax is applied for invoice line item(s) if cancellation policy is triggered.
   * @format int64
   */
  taxId?: number;
  /**
   * cutoff for full refund in hours, only relevant if `type == SIMPLE`.
   * @format int32
   */
  simpleCutoffHours?: number;
  /** true if this policy is the default across all products, false otherwise */
  defaultPolicy: boolean;
  /** a set of rules which apply when policy is triggered. Set only if `type == ADVANCED` */
  penaltyRules?: CancellationPolicyPenaltyRuleDto[];
}

export interface CancellationPolicyPenaltyRuleDto {
  /**
   * id of this penalty rule
   * @format int64
   */
  id?: number;
  /** Number of milliseconds since January 1, 1970, 00:00:00 UTC */
  created?: TimestampDto;
  /**
   * The `24` in `if less than 24 hours then 100% charge`. Can also specify number of days if ((cutoffHours >= 24) && (cutoffHours % 24 == 0)).
   * @format int32
   */
  cutoffHours: number;
  /**
   * How much to charge. Can either be percent or amount, depending on `chargeType`. If amount is used, the currency is taken from the sale.
   * @format double
   */
  charge: number;
  chargeType: CancellationPolicyPenaltyRuleChargeTypeDto;
}

export interface CommonInvoiceDto {
  /**
   * ID of this invoice
   * @format int64
   */
  id: number;
  /** Number of milliseconds since January 1, 1970, 00:00:00 UTC */
  issued: TimestampDto;
  /**
   * ISO 4217 currency code. The currency for all of line items / totals of this invoice.
   * @minLength 3
   * @maxLength 3
   */
  currency: string;
  lineItems: InvoiceLineItemDto[];
  /**
   * Total for this invoice. That is the sum of all line items, including taxes, discounts, fees, promo codes etc.
   * @format number
   */
  total: string;
  /**
   * Time zone of the issuer vendor. IANA/Olson style format.
   * @example ""Europe/Vilnius", "PST", "UTC""
   */
  issuerTimeZone: string;
  /**
   * Time zone of the recipient entity (could be vendor or agent, depends on the context) if known. IANA/Olson style format.
   * @example ""Europe/Vilnius", "PST", "UTC""
   */
  recipientTimeZone?: string;
}

export interface CommonPriceRuleDto {
  /**
   * price rule id. ID numbering is independent and may clash among different types (extra, pickup and so on).
   * @format int64
   */
  id?: number;
  /** this object wraps id (of some entity, type depends on context) as well as external id. External id refers to id on another platform than Bokun but allows referencing it as a convenience. At least one of `id`, `externalId` must be passed. In most cases, passing both IDs is OK as long as they refer to the same object. */
  rate: IdExternalIdDto;
  /** Number of milliseconds since January 1, 1970, 00:00:00 UTC */
  created?: TimestampDto;
  /**
   * reference to `PriceCatalogDto::id`
   * @format int64
   */
  priceCatalogId: number;
  /**
   * ISO 4217 currency code. Currency for this price rule.
   * @minLength 3
   * @maxLength 3
   */
  currency: string;
  /**
   * price amount for this rule.
   * @format number
   */
  amount: string;
  /**
   * reference to ID of the price schedule object (TBD). If omitted, price is classified as "base" price.
   * @format int64
   */
  priceScheduleId?: number;
  /**
   * reference to `PricingCategoryDto::id`. Can only be sent if this price is per person rather than per booking.
   * @format int64
   */
  pricingCategoryId?: number;
}

/** contains details about the company */
export interface CompanyDto {
  /**
   * ID of this company object within Bokun (as opposed to the official company ID or registration number)
   * @format int64
   */
  id: number;
  /** official company name */
  name: string;
  /** company registration number */
  registrationNumber: string;
  /** company VAT number */
  vatNumber?: string;
  /** an object to hold address details */
  registrationAddress: AddressDto;
  /** an object to hold address details */
  billingAddress?: AddressDto;
}

export interface ContactInformationDto {
  /** an enum containing all possible types of customer information that is collected by the system during the booking process */
  type: ContactInformationTypeDto;
  /** whether this is a required field (true) or not (false). For mandatory fields it is required to enter them during the checkout process */
  required: boolean;
  /** whether this is a required field before departure (true) or not (false). For mandatory fields it is required to enter them before the departure date */
  requiredBeforeDeparture?: boolean;
}

export interface CountryDto {
  /** ISO 3166-1 Alpha-2 code */
  code: string;
  /** name of this country */
  name: string;
}

export interface CustomerDto {
  /**
   * ID of this customer
   * @format int64
   */
  id?: number;
  /** customer email address */
  email?: string;
  /** customer title (e.g. Mr/Mrs/Ms) */
  title?: string;
  /** customer first name */
  firstName?: string;
  /** customer last name */
  lastName?: string;
  /** customer address */
  address?: string;
  /** customer post code */
  postCode?: string;
  /**
   * customer state
   * @example "FL"
   */
  state?: string;
  /** customer city */
  city?: string;
  /**
   * customer country of residence. ISO 3166-1 alpha 2 code.
   * @minLength 2
   * @maxLength 2
   */
  country?: string;
  /**
   * customer nationality. ISO 3166-1 alpha 2 code.
   * @minLength 2
   * @maxLength 2
   */
  nationality?: string;
  /** customer language */
  language?: string;
  /**
   * customer phone number with country code (if provided)
   * @example "+44 7890123456"
   */
  phoneNumber?: string;
  /** organization this customer belongs to */
  organization?: string;
  /** customer sex */
  sex?: string;
  /** customer passport ID */
  passportId?: string;
  /** @format date */
  dateOfBirth?: string;
}

export type CustomerInvoiceDto = CommonInvoiceDto & {
  /**
   * ID of the vendor (MarketplaceVendorDto::ID) who has issued this invoice.
   * @format int64
   */
  issuerVendorId: number;
  /**
   * ID of promo code if applied during the payment of this booking
   * @format int64
   */
  promoCodeId?: number;
  /**
   * ID of the customer (CustomerDto::id) for this booking
   * @format int64
   */
  customerId: number;
  /** Any fees if applied for this invoice */
  fees: FeeDto[];
};

/** contains value for a custom input field */
export interface CustomInputFieldValueDto {
  /**
   * ID of the custom field (`CustomInputFieldDto.id`) that was used to create this value
   * @format int64
   */
  customInputFieldId: number;
  /**
   * string representation of the value for given custom input field
   * @minLength 0
   * @maxLength 4294967295
   */
  value?: string;
}

export interface CustomerPaymentDto {
  /**
   * Customer payment ID
   * @format int64
   */
  id: number;
  /**
   * ISO 4217 currency code. Currency for this payment
   * @minLength 3
   * @maxLength 3
   */
  currency: string;
  /**
   * paid amount in `currency`. Note that if refund(s) was/were performed, the amount will be negative.
   * @format number
   */
  amount: string;
  /**
   * comment if available for this payment
   * @maxLength 1000
   */
  comment?: string;
  /** Number of milliseconds since January 1, 1970, 00:00:00 UTC */
  creationDate?: TimestampDto;
  paymentType: PaymentTypeDto;
  /** type of payment provider. Exposed as free string as opposed to enum as types might be appearing dynamically. Unset if paid by gift card etc. */
  paymentProviderType?: string;
  /**
   * set if `type == GIFT_CARD` and card refers to Bokun-issued gift card. Refers to `GiftCardDto::id` (TBD)
   * @format int64
   */
  giftCardId?: number;
  /**
   * set if `type == GIFT_CARD` and card refers to externally-issued gift card, e.g. YAY card. Refers to `ExternalGiftCardDto::id` (TBD)
   * @format int64
   */
  externalCardId?: number;
  /** unique payment reference used by payment gateway and/or payment provider */
  paymentReferenceId?: string;
}

export type DropoffPriceRuleDto = CommonPriceRuleDto & object;

export interface DurationDto {
  /**
   * duration (minutes part)
   * @format int32
   * @min 0
   * @max 59
   */
  minutes: number;
  /**
   * duration (hours part)
   * @format int32
   * @min 0
   * @max 23
   */
  hours: number;
  /**
   * duration (days part)
   * @format int32
   * @min 0
   * @max 6
   */
  days: number;
  /**
   * duration (weeks part)
   * @format int32
   * @min 0
   */
  weeks: number;
}

export interface ExperienceActivationSettingsDto {
  /** if true, this means this product is activated (or will be activated if requested) and vice versa. */
  activated: boolean;
  /** Number of milliseconds since January 1, 1970, 00:00:00 UTC */
  lastActivationDate?: TimestampDto;
}

/** contains information about availability of an experience product. This endpoint is available for all resellers as well as the original supplier of the requested product. */
export interface ExperienceAvailabilityDto {
  /** unique ID of this availability object. */
  id?: string;
  /** @format yyyy-MM-dd */
  date: string;
  /**
   * ID of start time object, refers to `ExperienceStartTimeDto::id`
   * @format int64
   */
  startTimeId: number;
  /**
   * @format time in 24 hour format, e.g. "16:30" or "05:15". This field only appears for `DATE_AND_TIME` products; never appears for `DATE` nor `PASS` products.
   * @minLength 5
   * @maxLength 5
   */
  time?: string;
  /**
   * how many remaining seats are left to book
   * @format int32
   * @min 0
   */
  remainingPax: number;
  /**
   * how many pickup slots are left to book. This field only appears if the experience product is configured to use pickup allotment and has limited pickup slots available.
   * @format int32
   * @min 0
   */
  remainingPickups?: number;
  /**
   * this attribute contains how many passengers are required for an event to happen. This number only reflects the value defined at availability rule level and is impacted by existing booking count. For example, if the rule defines that there's a requirement to book at least 5 pax and there would have been already 5 passengers booked, this field would then have value of 1 as this field can never be zero. Note that each rate might define a similar independent parameter which, if set to a greater value, could override this setting. For example if a rate is tiered and requires min 2 adults, the fact that this field has a value of `1` makes it irrelevant in the context of a single booking. Note that rate settings are provided separately as opposed to copied for every availability slot.
   * @format int32
   * @min 1
   */
  minPax: number;
  /** a list of guided languages applicable for this availability slot. Only present if there are guided languages defined for product. */
  guidedLanguages?: string[];
}

export type ExperienceAvailabilityStatisticsDto = ExperienceAvailabilityDto & {
  /** if true, this availability slot is closed off by the supplier. If false, this availability slot is open for business or its closure state is unknown. */
  closed: boolean;
  /** if true, this availability slot has unlimited capacity for passenger sales (not pickups!). If false, this availability slot has limited capacity or the state is unknown. */
  unlimited: boolean;
  /** if true, this availability slot is now past cutoff time. If false, this availability slot is within cutoff limits. */
  pastCutoff: boolean;
  /** if true, this availability slot is not yet bookable because of early booking limit restrictions. If false, this availability slot is within early booking limit restrictions. */
  tooEarly: boolean;
  /**
   * if set, this field will contain the number of available seats as originally defined in the availability rule. Omitted if unknown (e.g. Inventory Service) or unlimited.
   * @format int32
   */
  initialPax?: number;
  /**
   * return how many pickup seats were originally available for booking. Field only appears if this product has pickup system enabled and uses pickup allotment.
   * @format int32
   */
  initialPickups?: number;
  /**
   * How many passengers have booked this slot at the time of check (for typical non-combo, non-IS products). For combos, this tells how many combo products were booked. For Inventory Service products, this tells how many IS products were booked *in Bokun* rather than external channels.
   * @format int32
   */
  paxBooked: number;
  /**
   * return how many passengers have booked pickups for this slot at the time of check. Field only appears if this product has pickups available for purchase.
   * @format int32
   */
  pickupsBooked?: number;
  /**
   * return how many resources are remaining for this slot. Field only appears if this product has resource pool(s) connected to this slot. If multiple resource pools are assigned to the same start time, this will return the minimum availability of all such pools.
   * @format int32
   */
  remainingResources?: number;
  /**
   * returns ID of the recurrence rule object, if available.
   * @format int64
   */
  recurrenceRuleId?: number;
};

/** Availability rule. A set of such objects define availability for experience product. */
export interface ExperienceRecurrenceRuleDto {
  /**
   * ID of this experience recurrence rule
   * @format int64
   */
  id?: number;
  recurrenceRule: RecurrenceRuleDto;
  /**
   * what is the maximum number of passengers supplier can accept for this availability rule?
   * @format int32
   */
  maxCapacity: number;
  /**
   * used if pickup is enabled. Sets the amount of available seats in your pick-up service for this rule
   * @format int32
   */
  maxCapacityForPickup?: number;
  /**
   * if set, the experience will only be bookable if minimum participants is met
   * @format int32
   */
  minTotalPax?: number;
  /** Mandatory if `bookingType == DATE_AND_TIME`, otherwise should be omitted. if set to `true`, this rule will apply to all start times; in which case `startTimes` array should not be sent. If set to `false`, this rule will apply to specific start times, specified in now mandatory `startTimes` array. The array should contain references to Bokun-local start time ids and/or external IDs. Sending empty `startTimes` array has the same effect as having `allStartTimes == true`. */
  allStartTimes?: boolean;
  startTimes?: IdExternalIdDto[];
  guidedLanguages?: string[];
}

/** Contains available options / selections for early booking limit (aka booking opening date). This feature allows limiting sales further in the future. */
export interface ExperienceEarlyBookingLimitDto {
  limitType: EarlyBookingLimitType;
  /** wrapper for `LocalDateDto` / `LocalTimeDto` */
  specificDateTime?: LocalDateTimeDto;
  /**
   * Used if `limitType` is `RELATIVE_TO_TRAVEL_DATE_SPECIFIC_TIME` (in which case mandatory, otherwise should be omitted).
   * @format int32
   * @min 0
   */
  daysBefore?: number;
  /**
   * Used if `limitType` is `MONTHS_BEFORE_TRAVEL_DATE_SPECIFIC_TIME` (in which case mandatory, otherwise should be omitted).
   * @format int32
   * @min 0
   */
  monthsBefore?: number;
  /** defines time without time zone. */
  time?: LocalTimeDto;
}

export interface ExperienceBookingQuestionDto {
  /**
   * question ID
   * @format int64
   */
  id?: number;
  /** Number of milliseconds since January 1, 1970, 00:00:00 UTC */
  created?: TimestampDto;
  /** Number of milliseconds since January 1, 1970, 00:00:00 UTC */
  lastModified?: TimestampDto;
  /**
   * this is the question the customer will be asked
   * @minLength 1
   * @maxLength 255
   */
  label: string;
  /** whether this question is asking for personal data */
  personalData: boolean;
  /** whether answer for this question is required (mandatory) */
  required: boolean;
  /** whether answer for this question is required before departure (mandatory) */
  requiredBeforeDeparture?: boolean;
  /**
   * Extra text that explains the question further
   * @minLength 1
   * @maxLength 255
   */
  help?: string;
  /**
   * This text will appear when there is no value filled in
   * @minLength 1
   * @maxLength 255
   */
  placeholder?: string;
  dataType: ExperienceBookingQuestionDataTypeDto;
  /**
   * Default value of the answer if the question hasn't been answered
   * @minLength 1
   * @maxLength 255
   */
  defaultValue?: string;
  context: ExperienceBookingQuestionContextDto;
  pricingCategoryTriggerSelection: ExperienceBookingQuestionTriggerSelectionDto;
  pricingCategoryTriggers?: number[];
  rateTriggerSelection: ExperienceBookingQuestionTriggerSelectionDto;
  /** list of rate ids and/or external ids. Specified only if `rateTriggerSelection==SELECTED_ONLY`. Question is triggered only if given rate(s) is/are booked. */
  rateTriggers?: IdExternalIdDto[];
  extraTriggerSelection: ExperienceBookingQuestionTriggerSelectionDto;
  extraTriggers?: IdExternalIdDto[];
  /** should be set if `dataType == OPTIONS`. Contains all possible entries for option selection. */
  options?: ExperienceBookingQuestionOptionDto[];
}

export interface ExperienceBookingQuestionOptionDto {
  /**
   * option ID
   * @format int64
   */
  id?: number;
  /**
   * question label (text)
   * @minLength 1
   * @maxLength 255
   */
  label: string;
  /**
   * actual value that will be recorded once the relevant label is selected
   * @minLength 1
   * @maxLength 255
   */
  value: string;
}

/** box is a wrapper around another product which allows certain level of customization. The following fields are permitted to be overridden`:` title, description, photos and videos, externalId */
export interface ExperienceBoxSettingsDto {
  /** if true, this product will be created as box and will require experience product ID which you are boxing. */
  isBox: boolean;
  /**
   * this should refer to another product ID which is being boxed. Only own or contracted non-boxed, non-combo products can be boxed.
   * @format int64
   */
  boxedProductId?: number;
  /** whether this box is allowed to override photos and videos of its parent. Mandatory if `isBox` is `true` */
  overridePhotosVideos?: boolean;
  /** whether this box is allowed to override custom input field values of its parent. Mandatory if `isBox` is `true` */
  overrideCustomInputFieldValues?: boolean;
  /** whether this box is allowed to override itinerary of its parent. Mandatory if `isBox` is `true` */
  overrideItinerary?: boolean;
}

/** contains information about closed availabilities for a single date / single product */
export interface ExperienceCloseoutDto {
  /**
   * date when this closeout is active
   * @format date
   */
  date: string;
  /** start times that are closed. This can be just a subset of all start times allocated for requested product. */
  startTimeIds: number[];
}

/** enabling combo unlocks `ExperienceStartTimeDto::comboStartTimeMappings`. */
export interface ExperienceComboSettingsDto {
  /** true if this experience product is a combo of other products, false otherwise */
  isCombo: boolean;
  /** if true, customer gets tickets for each combo part as well as a ticket for the combo itself. If false, ticket will only be sent for combo parent. This field is mandatory if `isCombo=true`. */
  ticketPerComboComponent?: boolean;
  /** mandatory if `ticketPerComboComponent=true`. This specifies IDs of combo parts (experience product IDs) for which tickets should be sent. */
  ticketComboComponents?: number[];
}

export interface ExperienceComboPricingCategoryMappingDto {
  /**
   * refers to `PricingCategoryDto::id` of parent combo product
   * @format int64
   */
  comboParentPricingCategoryId: number;
  /**
   * refers to `PricingCategoryDto::id` of child combo product
   * @format int64
   */
  comboChildPricingCategoryId: number;
}

/** parent rate can be referenced either via `id` or `externalId` (or both if pointing to the same object). Child rate can only be referenced via `id`. */
export interface ExperienceComboRateMappingDto {
  /** this object wraps id (of some entity, type depends on context) as well as external id. External id refers to id on another platform than Bokun but allows referencing it as a convenience. At least one of `id`, `externalId` must be passed. In most cases, passing both IDs is OK as long as they refer to the same object. */
  comboParentRate: IdExternalIdDto;
  /**
   * Rate id (`ExperienceRateDto.id`) of the rate that is being mapped against parent rate. External IDs not accepted.
   * @format int64
   */
  comboChildRateId: number;
}

export interface ExperienceComboStartTimeMappingDto {
  /** @format int64 */
  id?: number;
  /**
   * must contain reference to `ExperienceStartTimeDto::id` of combo child product. Product must active and published. Can be own or contracted.
   * @format int64
   */
  comboChildStartTimeId: number;
  /** if true, it will inherit pickup settings from the parent combo. Otherwise, `pickupPlace` must be specified. */
  inheritPickupFromParent: boolean;
  /**
   * pickup place to use if `inheritPickupFromParent = false`
   * @maxLength 255
   */
  pickupPlace?: string;
  /** @maxLength 255 */
  dropoffPlace?: string;
  rateMappings: ExperienceComboRateMappingDto[];
  pricingCategoryMappings: ExperienceComboPricingCategoryMappingDto[];
}

export interface ExperienceCommissionDto {
  /** keys are strings limited to `TicketCategoryDto` type. Values are strings of [BigDecimal format](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html#%3Cinit%3E(java.lang.String)). */
  product: TicketCategoryCommissionDto;
  /** keys are strings limited to `TicketCategoryDto` type. Values are strings of [BigDecimal format](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html#%3Cinit%3E(java.lang.String)). */
  pickupDropoff?: TicketCategoryCommissionDto;
  extras: ExtraCommissionDto[];
}

/** object which contains a collection of selected experience product components, such as description, title and so on. Each component comes with its own structure/requirements. Absence of each element on update is treated as if the relevant element should stay unchanged (as opposed to deleted). */
export interface ExperienceComponentsDto {
  /** Number of milliseconds since January 1, 1970, 00:00:00 UTC */
  lastModified?: TimestampDto;
  /** Number of milliseconds since January 1, 1970, 00:00:00 UTC */
  created?: TimestampDto;
  /** ID which is meant to reference the ID of this product on some external system */
  externalId?: string;
  /**
   * product title
   * @minLength 1
   * @maxLength 140
   */
  title?: string;
  /** short description (aka excerpt) of this product */
  shortDescription?: string;
  /**
   * longer description of this product. HTML format
   * @maxLength 4294967295
   */
  description?: string;
  /** a list of product keywords. Max length of all keywords is 1000 chars providing extra separator is used for each keyword. */
  keywords?: string[];
  type?: ExperienceTypeDto;
  /** true if this particular experience product is marked as private, false otherwise */
  privateExperience?: boolean;
  /** IANA/Olson style time zone string. If unset per-product, will return the time zone of the supplier who owns this product */
  timeZone?: string;
  categories?: ExperienceCategoryDto[];
  themes?: ExperienceThemeDto[];
  difficultyLevel?: ExperienceDifficultyDto;
  /**
   * minimum age required to participate in this activity
   * @format int32
   */
  minAge?: number;
  duration?: DurationDto;
  onRequestDeadline?: DurationDto;
  location?: GooglePlaceDto;
  itinerary?: ExperienceItineraryDto[];
  photos?: PhotoDto[];
  videos?: VideoDto[];
  /** keys are strings limited to `ExperienceGuidanceTypeDto` type and values are arrays of strings. */
  guidanceTypes?: ExperienceGuidedLanguagesDto;
  inclusions?: ExperienceInclusionExclusionTypeDto[];
  /** This string contains any additional inclusions which are not mentioned in `inclusions`. Typically these are some custom items. HTML format */
  included?: string;
  exclusions?: ExperienceInclusionExclusionTypeDto[];
  /** This string contains any additional exclusions which are not mentioned in `exclusions`. Typically these are some custom items. HTML format */
  excluded?: string;
  knowBeforeYouGo?: ExperienceKnowBeforeYouGoTypeDto[];
  /** This string contains any additional know before you go items which are not mentioned in `knowBeforeYouGo`. Typically these are some custom items. HTML format */
  attention?: string;
  /** This string contains text for "what should your travellers bring with them" aka "requirements". HTML format */
  requirements?: string;
  /** a list of extras this product is associated to. Note that each extra still needs to be linked to activity rate(s) to be bookable. */
  extras?: ExtraDto[];
  bookingType?: ExperienceBookingTypeDto;
  defaultOpeningHours?: OpeningHoursDto;
  /** opening hours if defined for specific seasons as opposed to default opening hours which are valid all time, unless overridden by seasonal hours. */
  seasonalOpeningHours?: SeasonalOpeningHoursDto[];
  /** mandatory if new product is created, optional if updated. */
  cutoff?: ExperienceCutoffDto;
  capacityType?: ExperienceCapacityTypeDto;
  startTimes?: ExperienceStartTimeDto[];
  availabilityRules?: ExperienceRecurrenceRuleDto[];
  /** is used to keep specific settings if `ExperienceBookingTypeDto` value is `PASS`. */
  passSettings?: ExperiencePassSettingsDto;
  pricingCategories?: ExperiencePricingCategoriesDto;
  rates?: ExperienceRatesDto;
  /** contains a list of pricing rules for extras, pickups, dropoffs as well as experience itself. */
  pricing?: ExperiencePricingDto;
  /** What information to ask the main contact (as opposed to other passengers, see `informationToAskOtherPassengers`) */
  mainPaxInfo?: ContactInformationDto[];
  /** What information to ask the all other passengers (as opposed to main passenger, see `informationToAskMainContact`) */
  otherPaxInfo?: ContactInformationDto[];
  /** any custom questions to ask once this product is booked through widgets or API. Doesn't apply to OTA bookings. */
  bookingQuestions?: ExperienceBookingQuestionDto[];
  /**
   * this will set return product ID in case if product type is `TRANSPORT`. Error will be returned if the product is not of type `TRANSPORT`. The ID should refer to another experience product which is active, published, belongs to the same vendor, is not already connected to another product and is not a box.
   * @format int64
   */
  returnProductId?: number;
  /** enabling combo unlocks `ExperienceStartTimeDto::comboStartTimeMappings`. */
  combo?: ExperienceComboSettingsDto;
  /** product ticket settings */
  ticket?: ExperienceTicketDto;
  /** a list of booking label IDs. If set, when this activity is booked, the selected product group labels are applied automatically to the booking. */
  bookingLabels?: number[];
  /** a list of product flags. Max length of all flags is 1000 chars providing extra separator is used for each flag. */
  flags?: string[];
  /** a list of values for custom input fields. All values (present or not) are listed for all custom input fields which are associated with the vendor of this product and linked to Experiences product category */
  customInputFieldValues?: CustomInputFieldValueDto[];
  /**
   * refers to `ExperienceCommissionGroup::id` (TBD) if set, otherwise absent/null.
   * @format int64
   */
  commissionGroupId?: number;
  inventorySettings?: ExperienceInventorySettingsDto;
  /** if set to true, the supplier will be able to book using arbitrary price/group sizes in the booking desk. Customized bookings are disabled by default (value of this flag is false). */
  allowCustomizedBookings?: boolean;
  /** box is a wrapper around another product which allows certain level of customization. The following fields are permitted to be overridden`:` title, description, photos and videos, externalId */
  boxSettings?: ExperienceBoxSettingsDto;
  activation?: ExperienceActivationSettingsDto;
  /** this object contains parameters for passenger pickup (and/or meeting points) as well as dropoff */
  meetingType?: ExperienceMeetingSettingsDto;
  marketplaceVisibilityType?: MarketplaceVisibilityTypeDto;
  /**
   * prints experience product ID. This attribute is read-only.
   * @format int64
   */
  id?: number;
  /** Contains available options / selections for early booking limit (aka booking opening date). This feature allows limiting sales further in the future. */
  earlyBookingLimit?: ExperienceEarlyBookingLimitDto;
  /**
   * For how long to keep reservations (in minutes) for this product before they get aborted due to inactivity.
   * @format int32
   * @min 15
   */
  reservationTimeout?: number;
}

/** mandatory if new product is created, optional if updated. */
export interface ExperienceCutoffDto {
  type: ExperienceCutoffTypeDto;
  /**
   * must be specified if `type == RELATIVE_TO_ONE_SET_TIME`. Refers to some particular time (hour of day, 24hr format) along with `referenceMinute`. Cutoff will be applied in relation to this time.
   * @min 0
   * @max 23
   */
  referenceHour?: number;
  /**
   * must be specified if `type = RELATIVE_TO_ONE_SET_TIME`. Refers to some particular time (minute of hour) along with `referenceHour`. Cutoff will be applied in relation to this time.
   * @min 0
   * @max 59
   */
  referenceMinute?: number;
  /**
   * cutoff time (minutes part)
   * @min 0
   * @max 59
   */
  minutes: number;
  /**
   * cutoff time (hours part)
   * @min 0
   * @max 23
   */
  hours: number;
  /**
   * cutoff time (days part)
   * @min 0
   * @max 6
   */
  days: number;
  /**
   * cutoff time (weeks part)
   * @min 0
   * @max 51
   */
  weeks: number;
}

/** keys are strings limited to `ExperienceGuidanceTypeDto` type and values are arrays of strings. */
export interface ExperienceGuidedLanguagesDto {
  keyType?: ExperienceGuidanceTypeDto;
  [key: string]: any;
}

/** the `platformExtra` refers to extra object in Bokun, which can be referenced either via `ExtraDto::id` or `ExtraDto::externalId`. `remoteExtraId` is the extra id which is coming from Inventory plugin. */
export interface ExperienceInventoryExtraMappingDto {
  /** this object wraps id (of some entity, type depends on context) as well as external id. External id refers to id on another platform than Bokun but allows referencing it as a convenience. At least one of `id`, `externalId` must be passed. In most cases, passing both IDs is OK as long as they refer to the same object. */
  platformExtra: IdExternalIdDto;
  /** ID of remote extra on the Inventory Service (external to Bokun platform). */
  remoteExtraId: string;
}

export interface ExperienceInventoryPricingCategoryMappingDto {
  /**
   * reference to `PricingCategoryDto::id`; ID of pricing category linked to this product (Bokun platform local).
   * @format int64
   */
  platformPricingCategoryId: number;
  /** ID of remote pricing category on Inventory Service (external to Bokun platform). */
  remotePricingCategoryId: string;
}

/** binds Bokun platform rate (via reference to `ActivityRateDto::id` and/or `ActivityRateDto::externalId`) against remote rate (id only). */
export interface ExperienceInventoryRateMappingDto {
  /** this object wraps id (of some entity, type depends on context) as well as external id. External id refers to id on another platform than Bokun but allows referencing it as a convenience. At least one of `id`, `externalId` must be passed. In most cases, passing both IDs is OK as long as they refer to the same object. */
  platformRate: IdExternalIdDto;
  /** ID of remote rate on Inventory Service (external to Bokun platform). */
  remoteRateId: string;
}

export interface ExperienceInventorySettingsDto {
  /** true if Inventory Service should be enabled for this product, false if disabled */
  enabled: boolean;
  /** Bokun's ID of Inventory Plugin. ID is assigned at the time of plugin registration (done by Bokun staff). Note the plugin should also be configured for the calling vendor. Mandatory if `enabled=true`, otherwise should be omitted. */
  inventoryPluginId?: string;
  /** ID of the corresponding product, as reported by the plugin (external to Bokun platform). This product is or will be mapped against Bokun-local experience product. Mandatory if `enabled=true`, otherwise should be omitted. */
  remoteProductId?: string;
  /** A list of local to remote rate mappings. Mandatory if `enabled=true`, otherwise should be omitted. */
  rateMappings?: ExperienceInventoryRateMappingDto[];
  /** A list of local to remote pricing category mappings. Mandatory if `enabled=true`, otherwise should be omitted. */
  pricingCategoryMappings?: ExperienceInventoryPricingCategoryMappingDto[];
  /** A list of local to remote extra mappings. Optional if `enabled=true`, otherwise should be omitted. */
  extraMappings?: ExperienceInventoryExtraMappingDto[];
}

/** itinerary item (aka agenda item) */
export interface ExperienceItineraryDto {
  /**
   * ID of this itinerary item
   * @format int64
   */
  id?: number;
  /**
   * itinerary item title
   * @maxLength 255
   */
  title: string;
  /**
   * short description for this itinerary item
   * @maxLength 255
   */
  excerpt?: string;
  /**
   * long description (HTML) for this itinerary item
   * @maxLength 4294967295
   */
  description?: string;
  /** an object to hold address details */
  address?: AddressDto;
  /** a list of photo IDs (a reference to `PhotoDto::id`) that are assigned to this experience product and selected to be used for this particular itinerary item */
  photos: number[];
}

/** this object contains parameters for passenger pickup (and/or meeting points) as well as dropoff */
export interface ExperienceMeetingSettingsDto {
  type: ExperienceMeetingTypeDto;
  /**
   * can be used instead of `startPointAddresses` for better reuse. Refers to ID of a place group object. If set, `meetingPointAddresses` should be absent and vice versa.
   * @format int64
   */
  meetingPointPlaceGroupId?: number;
  /** used if `type` is one of (`MEET_ON_LOCATION`, `MEET_ON_LOCATION_OR_PICK_UP`). Alternatively, `startPointPlaceGroupId` must be used. */
  meetingPointAddresses?: ExperienceMeetingPointDto[];
  /** if set to true, this will infer that all pickup place groups (currently linked against the product as well as those created in the future) will be applicable for this product. If set to false, `pickupPlaceGroupIds` must contain specific IDs applicable for this product. This is a mandatory field if pickup is enabled (`type` is either `PICK_UP` or `MEET_ON_LOCATION_OR_PICK_UP`). */
  allPickupPlaceGroups?: boolean;
  /** a set of place group IDs applicable for pickup service of this product. Mandatory if `allPickupPlaceGroups == false`, otherwise should be absent. */
  pickupPlaceGroupIds?: number[];
  /**
   * How much time before departure does the pick-up start (in minutes)? This can only be used if `pickupTimeLocationBased == false` (which provides pickup settings per each pickup place). Either this, or `pickupTimeByLocation` is mandatory if pickup is enabled (`type` is either `PICK_UP` or `MEET_ON_LOCATION_OR_PICK_UP`). Can be negative if pickup is serviced after start time.
   * @format int32
   */
  pickupMinutesBefore?: number;
  /**
   * How much time (in minutes) does your service allow for pickup? Mandatory if `type` is either `PICK_UP` or `MEET_ON_LOCATION_OR_PICK_UP`.
   * @min 0
   */
  pickupTimeWindow?: number;
  /** if `false`, pickup time applies for all locations identically (as specified via `pickupMinutesBefore`). If true, one must provide pick up times for each location via `pickupTimeByLocation`. Mandatory if `type` is either `PICK_UP` or `MEET_ON_LOCATION_OR_PICK_UP`. */
  pickupTimeLocationBased?: boolean;
  /** specified if `pickupTimeLocationBased == true`. */
  pickupTimeByLocation?: ExperiencePickupTimeByLocationDto[];
  /** if `false`, this pickup service can always be booked. If `true`, only a certain number of items of this pickup service can be booked. If `true`, the relevant allotment number should be provided via `ExperienceRecurrenceRuleDto::maxCapacityForPickup`. Mandatory if `type` is either `PICK_UP` or `MEET_ON_LOCATION_OR_PICK_UP`. */
  pickupAllotment?: boolean;
  /** if enabled, one can allow the customer to enter custom pickup location. The customer will then fill out an address to be picked up at. Mandatory if `type` is either `PICK_UP` or `MEET_ON_LOCATION_OR_PICK_UP`. */
  customPickupAllowed?: boolean;
  /** if enabled, this will show a custom message to the customers ticket depending on the customers pick-up preference. Mandatory if `type` is either `PICK_UP` or `MEET_ON_LOCATION_OR_PICK_UP`, otherwise should be absent. */
  showPickupMessageOnTicket?: boolean;
  /** if enabled, ticket will display a custom message in case if no pickup is purchased/selected. Mandatory if `type` is either `PICK_UP` or `MEET_ON_LOCATION_OR_PICK_UP`, otherwise should be absent. */
  showNoPickupMessageOnTicket?: boolean;
  /**
   * message to display in case if `showNoPickupMessageOnTicket == true`. HTML format.
   * @maxLength 4000
   */
  noPickupMessage?: string;
  /** if true, this enables dropoff service for this product, false otherwise. */
  dropoffService: boolean;
  /** if enabled, one can allow the customer to enter custom dropoff location. The customer will then fill out an address to be dropped off at. Mandatory if `dropoffService` is true. */
  customDropoffAllowed?: boolean;
  /** if enabled, this will make use place IDs for dropoff using the same settings as for pickup. `dropoffPlaceGroupIds` should be provided otherwise. Mandatory if `dropoffService` is true. This flag can't be enabled if `allDropoffPlaceGroups` is enabled. */
  dropoffPlacesSameAsPickup?: boolean;
  /** if set to true, this will infer that all dropoff place groups (currently linked against the product as well as those created in the future) will be applicable for this product. If set to `false`, `dropoffPlaceGroupIds` must contain specific IDs applicable for dropoffs of this product. If set to `true`, `dropoffPlaceGroupIds` must be absent. This is a mandatory field if dropoff is enabled (`dropoffService` is `true`). This flag can't be enabled if `dropoffPlacesSameAsPickup` is enabled. */
  allDropoffPlaceGroups?: boolean;
  /** a set of place group IDs applicable for dropoff of this product. Only sent/accepted if `dropoffPlacesSameAsPickup` is `false`. */
  dropoffPlaceGroupIds?: number[];
}

/** is used to keep specific settings if `ExperienceBookingTypeDto` value is `PASS`. */
export interface ExperiencePassSettingsDto {
  expiryType: PassExpiryTypeDto;
  /**
   * global capacity for selling the pass. Specifies how many total passes can be sold. Applicable if experience `capacityType` is `LIMITED`.
   * @format int32
   * @min 0
   */
  capacity?: number;
  /**
   * applicable if `expiryType` is `FIXED_DATE`. Denotes date when this pass expires (last day of validity).
   * @format date
   */
  expiryDate?: string;
  /**
   * applicable if `expiryType` is `RELATIVE_DATE`. Specifies after how many days from the purchase the pass expires.
   * @format int32
   */
  validForDays?: number;
}

export interface ExperiencePickupTimeByLocationDto {
  /**
   * points to pickup place location ID
   * @format int64
   */
  placeId: number;
  /**
   * how much time (in minutes) is a pickup serviced for this location? Can be negative if pick up is planned after the start time.
   * @format int32
   */
  minBeforeStart: number;
}

export interface ExperiencePricingCategoriesDto {
  /**
   * ID of default pricing category (`PricingCategoryDto::id`) for this product. Must be among supplied `ids`
   * @format int64
   */
  defaultId: number;
  /** ordered list of `PricingCategoryDto::id`s. Contains active pricing categories assigned to this product */
  ids: number[];
  /** a list of pricing category ID replacements. Replacements are required if removed (by omission) pricing categories are referenced by bookings. Every `ExperiencePricingCategoryReplacementDto::replacementId` should be mentioned among `ids`. */
  replacements?: ExperiencePricingCategoryReplacementDto[];
}

export interface ExperiencePricingCategoryReplacementDto {
  /**
   * ID of pricing category (`PricingCategoryDto::id`) which is being removed
   * @format int64
   */
  removedId: number;
  /**
   * ID of pricing category (`PricingCategoryDto::id`) which replaces the removed ID
   * @format int64
   */
  replacementId: number;
}

export interface ExperienceRatesDto {
  /** this object wraps id (of some entity, type depends on context) as well as external id. External id refers to id on another platform than Bokun but allows referencing it as a convenience. At least one of `id`, `externalId` must be passed. In most cases, passing both IDs is OK as long as they refer to the same object. */
  defaultRate: IdExternalIdDto;
  /** contains actual rate information. Order of this list does matter - rates in the system will be ordered accordingly to this input. */
  rates: ExperienceRateDto[];
}

/** rate is one of the central entities in Bokun when it comes to experience products. Rate binds product pricing as well as governs settings such as pickup, dropoff, extras and so on. */
export interface ExperienceRateDto {
  /**
   * ID of this rate
   * @format int64
   */
  id?: number;
  /**
   * can be used to reference a rate in external system. Can be used to reference e.g. default rate when creating product. Each context might enforce own uniqueness criteria.
   * @maxLength 140
   */
  externalId?: string;
  /**
   * rate title
   * @maxLength 255
   */
  title: string;
  /**
   * rate description
   * @maxLength 1000
   */
  description?: string;
  /** Number of milliseconds since January 1, 1970, 00:00:00 UTC */
  created?: TimestampDto;
  /** Number of milliseconds since January 1, 1970, 00:00:00 UTC */
  lastModified?: TimestampDto;
  /**
   * bookings for this rate will have guaranteed min passenger count as specified by this property
   * @format int32
   * @default 1
   */
  minPerBooking?: number;
  /**
   * if set, bookings for this rate will have guaranteed max passenger count (inclusive) as specified by this property. Absence means there is no max limit.
   * @format int32
   */
  maxPerBooking?: number;
  pickupSelectionType: AddonSelectionTypeDto;
  pickupPricingType?: AddonPricingTypeDto;
  /** mandatory only if pickup is enabled (`meetingType` is not `MEET_ON_LOCATION` and `pickupPricingType` is `PRICED_SEPARATELY`), otherwise should not be sent. True if pickup is priced per single passenger; false if priced per booking (regardless how many pax booked) */
  pickupPricedPerPerson?: boolean;
  dropoffSelectionType: AddonSelectionTypeDto;
  dropoffPricingType?: AddonPricingTypeDto;
  /** mandatory only if dropoff is enabled, otherwise should not be sent. True if dropoff is priced per single passenger; false if priced per booking (regardless how many pax booked) */
  dropoffPricedPerPerson?: boolean;
  /**
   * refers to ID of the cancellation policy object (tbd).
   * @format int64
   */
  cancellationPolicyId: number;
  /** if set to true, prices for this rate are expressed per person (per pricing category). If set to false, price is set per booking regardless how many pax booked */
  pricedPerPerson: boolean;
  /** must be present if `pricedPerPerson` is `true` and vice versa. If set to true, this unlocks the ability to set prices per different price tiers (e.g. one price per single pax, different price for 2..3 pax etc). */
  tieredPricingEnabled?: boolean;
  /** should only be sent if `tieredPricingEnabled` is `true`. Should contain pax ranges for specific pricing categories applicable for this rate. Tiers must be continuous and not overlap */
  tiers?: ExperienceRateTierDto[];
  /** a list of configuration objects linking this rate with extras */
  extraConfigs?: ExperienceRateExtraConfigDto[];
  /** if set to true, this will infer that all start times (currently linked against the product as well as those created in the future) will be applicable for this rate. If set to false, `startTimes` must contain specific IDs applicable for this rate. This flag must be specified only if `bookingType` is `DATE_AND_TIME`, otherwise omitted. */
  allStartTimes?: boolean;
  /** a list of start times applicable for this rate. Only sent/accepted if `allStartTimes` is `false` and `bookingType` is `DATE_AND_TIME`. Each element can be specified via `id` and/or `externalId`. Specifying empty array has the same effect as having `allStartTimes` set to `true`. */
  startTimes?: IdExternalIdDto[];
  /** if set to true, this will infer that all pricing categories (currently linked against the product as well as those created in the future) will be applicable for this rate. If set to false, `pricingCategoryIds` must contain specific IDs applicable for this rate. */
  allPricingCategories: boolean;
  /** a set of pricing category IDs (`PricingCategoryDto::id`) applicable for this rate. Only sent/accepted if `allPricingCategories` is `false`. */
  pricingCategoryIds?: number[];
}

export interface ExperienceRateExtraConfigDto {
  /**
   * ID of this extra config object
   * @format int64
   */
  id?: number;
  /** this object wraps id (of some entity, type depends on context) as well as external id. External id refers to id on another platform than Bokun but allows referencing it as a convenience. At least one of `id`, `externalId` must be passed. In most cases, passing both IDs is OK as long as they refer to the same object. */
  extra: IdExternalIdDto;
  selectionType: ExperienceExtraSelectionTypeDto;
  pricingType: AddonPricingTypeDto;
  /** if set to true, this extra is priced per person (single pax). False if per booking. */
  pricedPerPerson: boolean;
}

export interface ExperienceRateTierDto {
  /**
   * ID of this tier config object
   * @format int64
   */
  id?: number;
  /**
   * number of min pax required to book this tier
   * @format int32
   */
  minPassengersRequired: number;
  /**
   * number of min pax required to book this tier
   * @format int32
   */
  maxPassengersRequired?: number;
  /**
   * specifies which pricing category (`PricingCategoryDto::id`) is defined with this pricing tier
   * @format int64
   */
  pricingCategoryId: number;
}

/** contains a list of pricing rules for extras, pickups, dropoffs as well as experience itself. */
export interface ExperiencePricingDto {
  /** a list of rules to be used for experience pricing. Previously existing rules should be copied with their IDs, new rules should be added. Omitted rules will be deleted. */
  experiencePriceRules: ExperiencePriceRuleDto[];
  /** a list of rules to be used for extra pricing. Previously existing rules should be copied with their IDs, new rules should be added. Omitted rules will be deleted. */
  extraPriceRules: ExtraPriceRuleDto[];
  /** a list of rules to be used for pickup pricing. Previously existing rules should be copied with their IDs, new rules should be added. Omitted rules will be deleted. */
  pickupPriceRules: PickupPriceRuleDto[];
  /** a list of rules to be used for dropoff pricing. Previously existing rules should be copied with their IDs, new rules should be added. Omitted rules will be deleted. */
  dropoffPriceRules: DropoffPriceRuleDto[];
  /** a list of currencies configured for each catalog. One entry per one catalog */
  priceCatalogCurrencies: ExperiencePriceCatalogCurrenciesDto[];
}

/** specifies which price catalogs are linked to each product, as well as which currencies are applicable for said catalog */
export interface ExperiencePriceCatalogCurrenciesDto {
  /**
   * refers to `PriceCatalogDto::id`
   * @format int64
   */
  priceCatalogId: number;
  currencies: string[];
  /**
   * ISO 4217 currency code. The currency for all of line items / totals of this invoice. Must refer to one of the `currencies` listed above
   * @minLength 3
   * @maxLength 3
   */
  defaultCurrency: string;
}

export type ExperiencePriceRuleDto = CommonPriceRuleDto & {
  /**
   * reference to `ExperienceRateTierDto::id`
   * @format int64
   */
  tierId?: number;
};

export type ExtraPriceRuleDto = CommonPriceRuleDto & {
  /** this object wraps id (of some entity, type depends on context) as well as external id. External id refers to id on another platform than Bokun but allows referencing it as a convenience. At least one of `id`, `externalId` must be passed. In most cases, passing both IDs is OK as long as they refer to the same object. */
  extra?: IdExternalIdDto;
};

export interface ExperienceMeetingPointDto {
  /**
   * ID of this meeting point
   * @format int64
   */
  id?: number;
  /**
   * a descriptive name for the place, e.g. "Grand Central Station", "Joe's bakery", etc.
   * @minLength 1
   * @maxLength 255
   */
  title: string;
  /** an object to hold address details */
  address: AddressDto;
}

/** Contains details about each start time. Note that if you want to assign this start time to specific rate(s), this is managed in rate settings. */
export interface ExperienceStartTimeDto {
  /**
   * ID of this start time
   * @format int64
   */
  id?: number;
  /**
   * Used to refer to an ID in another system (e.g. origin system) as well as for various relationships. For example, externalId can be used to reference a particular start time in rate settings on product creation. Each context might enforce own uniqueness criteria.
   * @maxLength 140
   */
  externalId?: string;
  /**
   * (internal) label for this start time. Available only if `ExperienceBookingTypeDto=DATE_AND_TIME`. Internal labels are only visible for the supplier
   * @maxLength 100
   */
  label?: string;
  /**
   * (external) label for this start time. Widgets will display this label next to their start time / departure. Available only if `ExperienceBookingTypeDto=DATE_AND_TIME`.
   * @maxLength 24
   */
  externalLabel?: string;
  /**
   * hour of day when this event starts. Works hand in hand with minute. Available only if `ExperienceBookingTypeDto=DATE_AND_TIME`.
   * @format int32
   * @min 0
   * @max 23
   */
  hour?: number;
  /**
   * minute of hour of day when this event starts. Available only if `ExperienceBookingTypeDto=DATE_AND_TIME`.
   * @format int32
   * @min 0
   * @max 59
   */
  minute?: number;
  /** if true and pickup enabled, this will signal the fact that start time will be different if pickup is booked. Available only if `ExperienceBookingTypeDto=DATE_AND_TIME`. Defaults to false if not specified. */
  overrideTimeWhenPickup?: boolean;
  /**
   * hour of day when pickup starts. Works hand in hand with pickup minute. Available only if `ExperienceBookingTypeDto=DATE_AND_TIME`. Defaults to 0 if not specified.
   * @format int32
   * @min 0
   * @max 23
   */
  pickupHour?: number;
  /**
   * minute of hour of day when pickup starts for this event. Works hand in hand with pickup hour. Available only if `ExperienceBookingTypeDto=DATE_AND_TIME`. Defaults to 0 if not specified.
   * @format int32
   * @min 0
   * @max 59
   */
  pickupMinute?: number;
  /**
   * Message to display on the ticket, if and only if this start time is booked with pick up. Available only if `ExperienceBookingTypeDto=DATE_AND_TIME`.
   * @maxLength 1000
   */
  voucherPickupMsg?: string;
  /**
   * duration of event if this start time is booked (minutes part). Available only if `ExperienceBookingTypeDto=DATE_AND_TIME`. Defaults to 0 if not specified.
   * @format int32
   * @min 0
   * @max 59
   */
  durationMinutes?: number;
  /**
   * duration of event if this start time is booked (hours part). Available only if `ExperienceBookingTypeDto=DATE_AND_TIME`. Defaults to 0 if not specified.
   * @format int32
   * @min 0
   * @max 23
   */
  durationHours?: number;
  /**
   * duration of event if this start time is booked (days part). Available only if `ExperienceBookingTypeDto=DATE_AND_TIME`. Defaults to 0 if not specified.
   * @format int32
   * @min 0
   * @max 6
   */
  durationDays?: number;
  /**
   * duration of event if this start time is booked (weeks part). Available only if `ExperienceBookingTypeDto=DATE_AND_TIME`. Defaults to 0 if not specified.
   * @format int32
   * @min 0
   */
  durationWeeks?: number;
  /** this is only allowed if parent product is combo. Combo products are required to have their start times mapped against start times of other products (own or resold). */
  comboStartTimeMappings?: ExperienceComboStartTimeMappingDto[];
}

/** product ticket settings */
export interface ExperienceTicketDto {
  barcodeFormat?: BarcodeFormatDto;
  /** if true, a ticket is issued per each passenger. If false, a single ticket is issued for all recipients of the same booking */
  ticketPerPerson: boolean;
  /**
   * message to show on the ticket. This message will be visible on all tickets for this experience booking
   * @min 0
   * @maxLength 4294967295
   */
  ticketMsg?: string;
}

export interface ExtraCommissionDto {
  /**
   * Extra ID
   * @format int64
   */
  id: number;
  /** keys are strings limited to `TicketCategoryDto` type. Values are strings of [BigDecimal format](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html#%3Cinit%3E(java.lang.String)). */
  commission?: TicketCategoryCommissionDto;
}

export interface ExtraDto {
  /**
   * ID of this extra
   * @format int64
   */
  id?: number;
  /**
   * ID which is meant to reference a corresponding ID of this product on some external system
   * @maxLength 140
   */
  externalId?: string;
  /**
   * title of this extra
   * @maxLength 255
   */
  title: string;
  /**
   * description of this extra
   * @maxLength 4000
   */
  description?: string;
  /**
   * if set to a positive integer, this will set the extra to have a limit on how much extra items can be booked regardless of how many participants booking has. A positive value is mutually exclusive with `limitByPax=true`.
   * @format int32
   * @min 0
   */
  maxPerBooking: number;
  type?: ExtraTypeDto;
  /** if set to true, maximum amount on the bookable quantity of this extra is the same amount as the number of participants for the booking. `true` value is mutually exclusive with `maxPerBooking > 0` */
  limitByPax: boolean;
  /**
   * refers to commission group object this extra belongs to. Commission group objects allow setting specific commissions for a set of items.
   * @format int64
   */
  commissionGroupId?: number;
}

export interface FeeDto {
  /** Fee title */
  title: string;
  /**
   * fee amount. Currency is normally part of the outer object which encloses this one
   * @format number
   */
  amount: string;
}

export interface GooglePlaceDto {
  /**
   * Internal Bokun ID of this object (as opposed to Google place ID)
   * @format int64
   */
  id?: number;
  /**
   * ISO 3166-1 alpha-2 country code. Served as upper case.
   * @minLength 2
   * @maxLength 2
   */
  countryCode?: string;
  /**
   * name of the city
   * @maxLength 255
   */
  city?: string;
  /**
   * name of the state
   * @maxLength 255
   */
  state?: string;
  /**
   * name of the place
   * @maxLength 255
   * @example "Joe's restaurant"
   */
  name?: string;
  /**
   * Google place ID (as per Google place API)
   * @maxLength 255
   */
  placeId?: string;
  /**
   * latitude, as per ISO 6709
   * @format double
   * @min -90
   * @max 90
   */
  latitude?: number;
  /**
   * longitude, as per ISO 6709
   * @format double
   * @min -180
   * @max 180
   */
  longitude?: number;
  /**
   * Language to use for location lookup. Supported languages are listed in https://developers.google.com/maps/faq#languagesupport The language parameter, if passed, is used in order to initialize the place name (and possibly other parameters) in requested language. This parameter is only used for incoming data when creating or updating the location and is never returned back to the client.
   * @maxLength 255
   */
  lookupLang?: string;
}

export interface InvoiceLineItemDto {
  /** string reference for this line item. Unique among all other references and could be used as a string ID. */
  ref: string;
  /**
   * name for this line item
   * @example "Adults"
   */
  title: string;
  /**
   * How many items have been booked?
   * @format int32
   */
  quantity: number;
  /**
   * How much would it cost (pre-tax, pre-discount) if the quantity was 1. [BigDecimal format](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html#%3Cinit%3E(java.lang.String))
   * @format number
   */
  unitPrice: string;
  /**
   * How much discount (as a percentage value) was applied to this line item. [BigDecimal format](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html#%3Cinit%3E(java.lang.String))
   * @format number
   */
  discountPercentage?: string;
  /**
   * How much discount (as the monetary value) applied to this line item. [BigDecimal format](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html#%3Cinit%3E(java.lang.String))
   * @format number
   */
  discountAmount?: string;
  /**
   * ID of Tax object used to compute this line item (if present). Otherwise absent/null.
   * @format int64
   */
  taxId?: number;
  /**
   * Tax percentage. Present if taxId is present and vice versa. [BigDecimal format](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html#%3Cinit%3E(java.lang.String))
   * @format number
   */
  taxPercentage?: string;
  /**
   * Tax amount amount for this line item. Present if taxId is present and vice versa. [BigDecimal format](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html#%3Cinit%3E(java.lang.String))
   * @format number
   */
  taxAmount?: string;
  /** if true it means that tax amount is already incorporated into unitPrice. If false it means that this amount will be added on top of unit price. Present if taxId is present and vice versa */
  taxIncluded?: boolean;
  /**
   * Total amount for this line item. [BigDecimal format](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html#%3Cinit%3E(java.lang.String))
   * @format number
   */
  total?: string;
  /**
   * If this line item was the cause of a pricing category booked (either as extra, pickup, dropoff or standalone product), this will point to pricing category id. Absent if per-booking etc.
   * @format int64
   */
  pricingCategoryId?: number;
  /**
   * If this line item was the cause of an extra being booked, this will point to extra id
   * @format int64
   */
  extraId?: number;
  /** If this line item was the cause of a pickup being booked, this will be set to true. Otherwise false */
  pickup?: boolean;
  /** If this line item was the cause of a dropoff being booked, this will be set to true. Otherwise false */
  dropoff?: boolean;
  /**
   * This will point to the rate ID booked, if the line item is applicable to a rate (as opposed to e.g. custom fees etc)
   * @format int64
   */
  rateId?: number;
  /**
   * Commission percentage for this line item. Pertains to `SellerInvoiceDto`, `AgentInvoiceDto` and `AffiliateInvoiceDto` objects only, otherwise null/absent. [BigDecimal format](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html#%3Cinit%3E(java.lang.String))
   * @format number
   */
  commissionPercentage?: string;
  /**
   * Commission amount for this line item. Pertains to `SellerInvoiceDto`, `AgentInvoiceDto` and `AffiliateInvoiceDto` objects only, otherwise null/absent. [BigDecimal format](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html#%3Cinit%3E(java.lang.String))
   * @format number
   */
  commissionAmount?: string;
  /**
   * refers to experience product id in Bokun if this line item relates to it directly or indirectly (e.g. adult ticket or extra or pickup was purchased which is part of relevant experience product)
   * @format int64
   */
  experienceId?: number;
  /** refers to experience product external id if this line item relates to it directly or indirectly (e.g. adult ticket or extra or pickup was purchased which is part of relevant experience product) */
  experienceExternalId?: string;
  /**
   * refers to gift card product id in Bokun if a gift card was booked
   * @format int64
   */
  giftCardId?: number;
  /**
   * refers to experience booking ID (aka Activity booking ID) if available
   * @format int64
   */
  experienceBookingId?: number;
}

/** this object wraps id (of some entity, type depends on context) as well as external id. External id refers to id on another platform than Bokun but allows referencing it as a convenience. At least one of `id`, `externalId` must be passed. In most cases, passing both IDs is OK as long as they refer to the same object. */
export interface IdExternalIdDto {
  /** @format int64 */
  id?: number;
  externalId?: string;
}

/** defines date without time zone. */
export interface LocalDateDto {
  /**
   * @format int32
   * @min 0
   */
  year: number;
  month: MonthDto;
  /**
   * @format int32
   * @min 1
   * @max 31
   */
  dayOfMonth: number;
}

/** wrapper for `LocalDateDto` / `LocalTimeDto` */
export interface LocalDateTimeDto {
  /** defines date without time zone. */
  date: LocalDateDto;
  /** defines time without time zone. */
  time: LocalTimeDto;
}

/** defines time without time zone. */
export interface LocalTimeDto {
  /**
   * hour of the day, 24 hr format
   * @format int32
   * @min 0
   * @max 23
   */
  hour: number;
  /**
   * minute of hour
   * @format int32
   * @min 0
   * @max 59
   */
  minute: number;
  /**
   * second of minute
   * @format int32
   * @min 0
   * @max 59
   */
  second: number;
}

/** a lightweight representation of a vendor object, designed to be used for marketplace purposes. Contains details such as company address, code, VAT - things you'd need for issuing invoices. */
export interface MarketplaceVendorDto {
  /**
   * ID of this vendor
   * @format int64
   */
  id: number;
  /** title (aka name) of this company in the Bokun marketplace */
  title: string;
  /**
   * vendor description, as filled by vendor themselves
   * @maxLength 255
   */
  description?: string;
  /** contains details about the company */
  company: CompanyDto;
  /**
   * IANA/Olson style time zone of this vendor. Note that products might have this overridden.
   * @format string
   * @example ""Europe/Vilnius", "PST", "UTC""
   */
  timeZone: any;
  /**
   * URL of the public website for this vendor
   * @format string
   */
  websiteUrl?: any;
  /**
   * URL of the public website for this vendor on TripAdvisor
   * @format string
   */
  tripadvisorUrl?: any;
  /**
   * URL of the public website for this vendor on Facebook
   * @format string
   */
  facebookUrl?: any;
  /**
   * URL of the public website for this vendor on Instagram
   * @format string
   */
  instagramUrl?: any;
  /**
   * URL of the public website for this vendor on LinkedIn
   * @format string
   */
  linkedinUrl?: any;
  /**
   * URL of the public website for this vendor on Trustpilot
   * @format string
   */
  trustpilotUrl?: any;
  /**
   * URL of the public website for this vendor on Twitter
   * @format string
   */
  twitterUrl?: any;
}

export interface OpeningHoursDto {
  /** @format int64 */
  id?: number;
  monday: OpeningHoursWeekdayDto;
  tuesday: OpeningHoursWeekdayDto;
  wednesday: OpeningHoursWeekdayDto;
  thursday: OpeningHoursWeekdayDto;
  friday: OpeningHoursWeekdayDto;
  saturday: OpeningHoursWeekdayDto;
  sunday: OpeningHoursWeekdayDto;
}

export interface OpeningHoursWeekdayDto {
  /** true if this establishment is open for the entire day, false otherwise */
  open24Hours: boolean;
  timeIntervals?: OpeningHoursTimeIntervalDto[];
}

export interface OpeningHoursTimeIntervalDto {
  /** @format int64 */
  id?: number;
  /** defines time without time zone. */
  openFrom: LocalTimeDto;
  /**
   * Specifies for how many hours is open. This is added to openFrom along with openForMinutes to get the closing time.
   * @format int32
   * @min 0
   * @max 23
   */
  openForHours: number;
  /**
   * Specifies for how many minutes is open. This is added to openFrom along with openForHours to get the closing time.
   * @format int32
   * @min 0
   * @max 59
   */
  openForMinutes: number;
}

export interface PagedListDto {
  /**
   * page number, zero based
   * @format int32
   * @min 0
   */
  pageNo: number;
  /**
   * page size (how many items in a single page)
   * @format int32
   * @min 1
   * @max 100
   */
  pageSize: number;
  /**
   * how many pages are there in total?
   * @format int32
   * @min 0
   */
  totalPageCount: number;
  /**
   * how many rows are there in total?
   * @format int32
   * @min 0
   */
  totalCount: number;
}

export interface PhotoDto {
  /**
   * ID of this photo
   * @format int64
   */
  id?: number;
  /**
   * URL of the photo, if original image is to be retrieved. Derived files are meant to use different URLs which provide near-instant access to transformed (resized, cropped, etc.) invariants. Note that this attribute is read only - one can not create nor update the URL using the same endpoint which creates or updates photo metadata as file upload handling is done separately. Passing the same value is OK.
   * @maxLength 255
   */
  originalUrl?: string;
  /**
   * The URL to use for the end user. Typically this is the URL given by the CDN provider. Make sure that this URL is never cached as it may change without further notice. The property can only be retrieved and never set.
   * @maxLength 255
   */
  url?: string;
  /**
   * caption for this photo
   * @maxLength 255
   */
  caption?: string;
  /**
   * visually impaired users using screen readers will be read an alt attribute to better understand an image
   * @maxLength 255
   */
  alternateText?: string;
  /**
   * height of this picture, in pixels (if available)
   * @format int32
   * @max 10000
   */
  height?: number;
  /**
   * width of this picture, in pixels (if available)
   * @format int32
   * @max 10000
   */
  width?: number;
}

export type PickupPriceRuleDto = CommonPriceRuleDto & object;

export type PricingCategoriesPagedListDto = PagedListDto & {
  items: PricingCategoryDto[];
};

export interface PricingCategoryDto {
  /**
   * ID of this pricing category
   * @format int64
   */
  id: number;
  /**
   * title for this pricing category object
   * @maxLength 255
   */
  title: string;
  ticketCategory: TicketCategoryDto;
  /**
   * For `TicketCategory.GROUP`:
   *   * 0: reserve as many seats per group as there are passengers booked
   *   * more than 0: reserve as many seats per group as `groupSize`(this attribute is then expected to match `groupSize`)
   *
   * For all other ticket categories: reserve as many seats per passenger as specified in this attribute
   * @format int32
   */
  occupancy: number;
  /**
   * mandatory if `ticketCategory == GROUP`, otherwise should be absent
   * @format int32
   */
  groupSize?: number;
  ageQualified: boolean;
  /**
   * mandatory if `ageQualified=true`, otherwise should be absent
   * @format int32
   * @min 0
   */
  minAge?: number;
  /**
   * mandatory if `ageQualified=true`, otherwise should be absent
   * @format int32
   * @min 0
   */
  maxAge?: number;
  /** if true, this pricing category depends on some other (see `masterCategoryId`). In other words, it can only be booked if the master category is booked. If false, no dependencies exist. */
  dependent: boolean;
  /**
   * set if `dependent` is true. Points to another `PricingCategoryDto::id` which has to be booked in order for this category to be bookable.
   * @format int64
   */
  masterCategoryId?: number;
  /**
   * how many seats of this pricing category can be booked for one master category? Mandatory if `masterCategoryId` is set, otherwise should be absent.
   * @format int32
   */
  maxPerMaster?: number;
  /** if true, a limit (specified via `maxDependentSum`) is enforced when purchasing seats for child categories. */
  sumDependentCategories: boolean;
  /**
   * must be specified if `sumDependentCategories` is true, otherwise should be absent.
   * @format int32
   */
  maxDependentSum?: number;
  /** if set, this category can only be booked directly by the supplier and not resold through marketplace or OTAs */
  internalUseOnly: boolean;
}

export type PriceCatalogsPagedListDto = PagedListDto & {
  items: PriceCatalogDto[];
};

export interface PriceCatalogDto {
  /**
   * id of this price catalog
   * @format int64
   */
  id?: number;
  /**
   * title of this price catalog
   * @maxLength 255
   */
  title: string;
  /** true if this price catalog is the default for this vendor, false otherwise */
  defaultPriceCatalog?: boolean;
}

export interface PriceScheduleDto {
  /**
   * ID of this price schedule
   * @format int64
   */
  id: number;
  /** title of this price schedule */
  title: string;
  /** Number of milliseconds since January 1, 1970, 00:00:00 UTC */
  creationDate: TimestampDto;
  /** Number of milliseconds since January 1, 1970, 00:00:00 UTC */
  lastModifiedDate?: TimestampDto;
  recurrenceRule: RecurrenceRuleDto;
}

export type PriceSchedulesPagedListDto = PagedListDto & {
  items: PriceScheduleDto[];
};

export interface RecurrenceRuleDto {
  /**
   * when does this recurrence rule start (year/month/day of month)
   * @format date
   */
  startDate?: string;
  /**
   * when does this recurrence rule stop (year/month/day of month). Optional.
   * @format date
   */
  endDate?: string;
  /** on which days of week does this event occur? If omitted, it is assumed it occurs on every day of the week. Note this works in conjunction with byMonth. If both are defined, the result will be conjunction of these sets. */
  byWeekday?: DayOfWeekDto[];
  /** on which days of month does this event occur? If omitted, it is assumed it occurs on every day of the month. Note this works in conjunction with byWeekday. If both are defined, the result will be conjunction of these sets. */
  byMonth?: MonthDto[];
}

export type ResourceAssignmentDto = ResourceBookingDto & {
  /**
   * ID of start time booked (refers to `ExperienceStartTimeDto::id`)
   * @format int64
   */
  startTimeId: number;
  /**
   * ID of experience product booked (refers to `ExperienceComponentsDto::id`)
   * @format int64
   */
  experienceId?: number;
};

export interface ResourceBookingDto {
  /**
   * ID of this resource booking
   * @format int64
   */
  id?: number;
  /**
   * ID of linked pricing category booking (which in turns refers to product booking)
   * @format int64
   */
  pricingCategoryBookingId: number;
  /**
   * ID of booked resource pool
   * @format int64
   */
  resourcePoolId: number;
  /**
   * ID of booked resource
   * @format int64
   */
  resourceId: number;
}

export interface ResourceDto {
  /**
   * ID of this resource
   * @format int64
   */
  id?: number;
  /**
   * title of this resource
   * @maxLength 255
   */
  title: string;
  /**
   * how many (seats, passengers, etc.) can this resource handle at any given time slot?
   * @format int32
   * @min 0
   */
  capacity: number;
  /** Number of milliseconds since January 1, 1970, 00:00:00 UTC */
  created?: TimestampDto;
  /** Number of milliseconds since January 1, 1970, 00:00:00 UTC */
  lastModified?: TimestampDto;
  resourcePoolIds: number[];
  /**
   * if this resource is associated to an extranet user, this field will be initialized with the extranet user id, otherwise empty/omitted
   * @format int64
   */
  userId?: number;
}

export type ResourcePoolPagedListDto = PagedListDto & {
  items: ResourcePoolDto[];
};

export type ResourcePagedListDto = PagedListDto & {
  items: ResourceDto[];
};

export interface ResourcePoolDto {
  /**
   * ID of this resource pool
   * @format int64
   */
  id?: number;
  /**
   * title of this resource pool
   * @maxLength 255
   */
  title: string;
  /** Number of milliseconds since January 1, 1970, 00:00:00 UTC */
  created?: TimestampDto;
  /** Number of milliseconds since January 1, 1970, 00:00:00 UTC */
  lastModified?: TimestampDto;
  resourceIds: number[];
  links: ResourcePoolLinkDto[];
}

/** Resource link object maintains the link between one resource pool and one start time, plus resource allocation settings for this particular link. As this object is designed to be embedded inside ResourcePool, it doesn't duplicate it's id. */
export interface ResourcePoolLinkDto {
  /**
   * ID of connected start time
   * @format int64
   */
  experienceStartTimeId: number;
  allocationPolicy: ResourceAllocationPolicyDto;
}

export type SeasonalOpeningHoursDto = OpeningHoursDto & {
  /**
   * when does this period start (year)? Optional if starts on certain month/day every year.
   * @format int32
   */
  startYear?: number;
  /**
   * when does this period start (month)?
   * @format int32
   * @min 1
   * @max 12
   */
  startMonth: number;
  /**
   * when does this period start (day of month)?
   * @format int32
   * @min 1
   * @max 31
   */
  startDay: number;
  /**
   * when does this period end (year)? Optional if ends on certain month/day every year.
   * @format int32
   */
  endYear?: number;
  /**
   * when does this period end (month)?
   * @format int32
   * @min 1
   * @max 12
   */
  endMonth: number;
  /**
   * when does this period end (day of month)?
   * @format int32
   * @min 1
   * @max 31
   */
  endDay: number;
};

export type SellerInvoiceDto = CommonInvoiceDto & {
  /** Number of milliseconds since January 1, 1970, 00:00:00 UTC */
  reconciledAt?: TimestampDto;
  /**
   * ID of the vendor (MarketplaceVendorDto::ID) who has issued this invoice
   * @format int64
   */
  issuerVendorId: number;
  /**
   * ID of the vendor (MarketplaceVendorDto::ID) who is the recipient of this invoice
   * @format int64
   */
  recipientVendorId: number;
};

export interface StandardErrorDto {
  /** Error text */
  error: string;
}

export type TaxesPagedListDto = PagedListDto & {
  items: TaxDto[];
};

export interface TaxDto {
  /**
   * ID of this tax
   * @format int64
   */
  id: number;
  /** title for this tax object */
  title: string;
  /** true if this tax object is inclusive (tax amount is already included when displaying rack rate price), false if excluded (tax amount is added on top at later booking stages) */
  included: boolean;
  /**
   * This object mimics Java's `java.math.RoundingMode`:
   * * `UP` - Rounding mode to round away from zero. Always increments the digit prior to a non-zero discarded
   *   fraction. Note that this rounding mode never decreases the magnitude of the calculated value.
   * * `DOWN` - Rounding mode to round towards zero. Never increments the digit prior to a discarded fraction (i.e.,
   *   truncates). Note that this rounding mode never increases the magnitude of the calculated value.
   * * `CEILING` - Rounding mode to round towards positive infinity. If the result is positive, behaves as for `UP`;
   *   if negative, behaves as for `DOWN`. Note that this rounding mode never decreases the calculated value.
   * * `FLOOR` - Rounding mode to round towards negative infinity. If the result is positive, behave as for `DOWN`;
   *   if negative, behave as for `UP`. Note that this rounding mode never increases the calculated value.
   * * `HALF_UP` - Rounding mode to round towards "nearest neighbor" unless both neighbors are equidistant, in which
   *   case round up. Behaves as for `UP` if the discarded fraction is ≥ 0.5; otherwise, behaves as for `DOWN`. Note
   *   that this is the rounding mode commonly taught at school.
   * * `HALF_DOWN` - Rounding mode to round towards "nearest neighbor" unless both neighbors are equidistant, in
   *   which case round down. Behaves as for `UP` if the discarded fraction is > 0.5; otherwise, behaves as for
   *   `DOWN`.
   * * `HALF_EVEN` - Rounding mode to round towards the "nearest neighbor" unless both neighbors are equidistant, in
   *   which case, round towards the even neighbor. Behaves as for `HALF_UP` if the digit to the left of the
   *   discarded fraction is odd; behaves as for `HALF_DOWN` if it's even. Note that this is the rounding mode that
   *   statistically minimizes cumulative error when applied repeatedly over a sequence of calculations. It is
   *   sometimes known as "Banker's rounding," and is chiefly used in the USA.
   * * `UNNECESSARY` - Rounding mode to assert that the requested operation has an exact result, hence no rounding
   *   is necessary.
   */
  roundingMode: RoundingModeDto;
  /**
   * Overall tax percentage value, computed from all components. [BigDecimal format](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html#%3Cinit%3E(java.lang.String))
   * @format number
   */
  percentage: string;
  /** tax components which make up the overall total percentage */
  components: TaxDtoComponents[];
}

export interface TaxDtoComponents {
  /**
   * ID of this tax component
   * @format int64
   */
  id: number;
  /** title of this tax component */
  title: string;
  /**
   * Percentage of this tax component. [BigDecimal format](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html#%3Cinit%3E(java.lang.String))
   * @format number
   */
  percentage: string;
  /** if true, this tax component will be used by summing up this particular component. For example if tax is made of two 10% *non-compound* components, the overall percentage is `10% + 10% = 20%`. If false, the total percentage is calculated by applying percentage of top of each other. For example if tax is made of two 10% *compound* components, the overall percentage is `(100 * 1.1) * 1.1 = 121`, or 21%. This flag only makes any difference if more than one such flag is present. */
  compounding: boolean;
}

/** keys are strings limited to `TicketCategoryDto` type. Values are strings of [BigDecimal format](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html#%3Cinit%3E(java.lang.String)). */
export interface TicketCategoryCommissionDto {
  keyType?: TicketCategoryDto;
  [key: string]: any;
}

/**
 * Number of milliseconds since January 1, 1970, 00:00:00 UTC
 * @format int64
 */
export type TimestampDto = number;

export interface VendorContractDto {
  /**
   * @format int64
   * @example 10
   */
  id: number;
  /** Number of milliseconds since January 1, 1970, 00:00:00 UTC */
  creationDate: TimestampDto;
  /** Number of milliseconds since January 1, 1970, 00:00:00 UTC */
  lastModifiedDate?: TimestampDto;
  /** Number of milliseconds since January 1, 1970, 00:00:00 UTC */
  lastAcceptedDate?: TimestampDto;
  /** Number of milliseconds since January 1, 1970, 00:00:00 UTC */
  lastCancelledDate?: TimestampDto;
  /**
   * @format int64
   * @example 144
   */
  sellerId: number;
  /**
   * @format int64
   * @example 144
   */
  supplierId: number;
  status: VendorContractStatusDto;
  amendmentStatus?: VendorContractStatusDto;
  supplierMayCancelBookings: AllowedChangeIntervalDto;
  supplierMayChangeBookings: AllowedChangeIntervalDto;
  sellerMayCancelBookings: AllowedChangeIntervalDto;
  sellerMayChangeBookings: AllowedChangeIntervalDto;
  /** Whether customer contacts are made available for supplier at the time of booking (true) or later/never (false) */
  contactDetailsHidden: boolean;
  /**
   * If contactDetailsHidden=false, this may indicate that contact details are not made available instantly after the booking but X days before travel date instead. If this value is null, contact details are not shared at all.
   * @format int32
   * @example 1
   */
  contactDetailsHiddenUntilDays?: number;
  /**
   * ISO 4217 currency code. The currency used to settle payments between seller/supplier once a product is resold. Present if the contract has been accepted / terms agreed, otherwise absent/null.
   * @minLength 3
   * @maxLength 3
   */
  currency?: string;
  /** array of experience product IDs that are made sellable by this supplier to the reseller as part of this contract. Array is always present but is only populated if the contract has been accepted / terms have been agreed. */
  products: number[];
}

export interface VideoDto {
  /**
   * @format int64
   * @example 10
   */
  id: number;
  /**
   * URL of the video. Note that currently only YouTube and Vimeo URLs are supported
   * @maxLength 255
   */
  sourceUrl: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://api.bokuntest.com";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key],
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.JsonApi]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Bókun RESTful web services
 * @version 2.0.160
 * @baseUrl https://api.bokuntest.com
 * @externalDocs https://bokun.io
 * @contact <api@bokun.is>
 *
 * These web services are a second generation of Bókun's RESTful API offerings. Initially they will have a list of new services, such as marketplace access etc. but the eventual plan is to add selected [v1 counterparts](https://bokun.github.io/api-docs/). As of now, you may use both v1 and v2 interchangeably; as the same API keys should work for both versions.
 *
 * **Data types**
 *
 * DTOs used in these services have the following rules for data types:
 *
 *   - always use UTC timestamp (number of milliseconds since January 1, 1970, 00:00:00 UTC) for date & time objects; provide timezone context in a separate field where appropriate
 *   - use Swagger native string/date for date-only fields; provide timezone context in a separate field where appropriate
 *   - always use strings for monetary/commission amounts, never use float or double. Please refer to [Java BigDecimal](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html#%3Cinit%3E(java.lang.String)) for more details.
 *
 * **Backwards compatibility policy**
 *
 * We take backwards compatibility seriously and pledge to the following policy:
 *
 *   - existing URL endpoints will not be removed without sensible sunset warning, but any new new endpoints may be added without prior notice
 *   - existing attributes in DTOs will not be removed, but new attributes and/or DTO types may be added without prior notice
 *   - established input names and types (path elements, query parameters) of existing endpoints will not be removed, but a more flexible rules may be applied in case if such endpoint is changed without prior notice
 *   - types of established DTO attributes will not change
 *   - mandatory DTO attributes will not be removed but in case if field becomes no longer mandatory, some default value will be sent
 *   - each minor/backwards compatible API change will result a minor version increase, e.g. `v2.0.1` -> `v.2.0.2`
 *   - each major/backwards incompatible API change (if any) will result a new set of endpoints/DTOs and will major/middle version increase, e.g. `v2.0.1` -> `v.3.0.0` or `v2.0.1` -> `v.2.1.0`
 *   - generated .class files for DTO objects will reflect the version name without minor component, e.g. v2.0.9 will be placed in `io.bokun.rest.v2_0` package
 *   - we do not provide any guarantees over the ordering of DTO JSON siblings (attributes at the same JSON object level). Assume that order may change at any time
 *   - DTO attributes with null values and absent attributes are semantically equal. We will always prefer the absence but the receiving end must be able to handle nulls if they appear
 *   - for array types, we generally aim to keep empty arrays for DTO access convenience but don't assume this will be held universally
 *   - for inherited types (`allOf`), we reserve the right to promote attributes in DTO objects up the inheritance hierarchy without prior notice
 *   - we will not remove elements from enums without prior notice but reserve the right to add new elements in
 *
 * Some useful links:
 * - [Bókun developer documentation portal](https://bokun.dev/)
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  restapi = {
    /**
     * @description provides a list of supported countries
     *
     * @tags general
     * @name GetCountries
     * @summary provide a list of supported countries
     * @request GET:/restapi/v2.0/countries
     * @secure
     */
    getCountries: (
      query?: {
        /** if specified, this will result country names printed in specified language/locale. The format of this string IETF BCP 47 language tag, e.g. 'de-DE'. If omitted, this will print country names in English. */
        languageTag?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CountryDto[], StandardErrorDto>({
        path: `/restapi/v2.0/countries`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description provides a list of supported time zones
     *
     * @tags general
     * @name GetTimeZones
     * @summary provide a list of supported time zones
     * @request GET:/restapi/v2.0/timezones
     * @secure
     */
    getTimeZones: (params: RequestParams = {}) =>
      this.request<string[], StandardErrorDto>({
        path: `/restapi/v2.0/timezones`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get details of a contract by contract ID. Requires the caller to have Marketplace contract view permission granted.
     *
     * @tags marketplace
     * @name GetContractById
     * @summary Get details of a contract by contract ID
     * @request GET:/restapi/v2.0/marketplace/contract/{contractId}
     * @secure
     */
    getContractById: (contractId: number, params: RequestParams = {}) =>
      this.request<VendorContractDto, StandardErrorDto>({
        path: `/restapi/v2.0/marketplace/contract/${contractId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Requires the caller to have Marketplace contract view permission granted. Note that this will also bring OTA contracts.
     *
     * @tags marketplace
     * @name GetSellerContracts
     * @summary Get an array of contract IDs where current vendor acts as a supplier and all vendors of returned contracts are resellers.
     * @request GET:/restapi/v2.0/marketplace/contracts/seller
     * @secure
     */
    getSellerContracts: (
      query?: {
        /** ISO 3166-1 Alpha-2 code. Supported codes&#58; as per `CountryDto::code`. If specified, the results will be filtered to only contain resellers from said country. */
        country?: string;
        /** contract status to filter by. If specified, the results will be filtered to only contain contracts with said status. */
        status?: VendorContractStatusDto;
        /**
         * could be used to filter results by arbitrary reseller ID (vendor ID). If used, this will limit result set to zero (if no such contract exists) or one (if contract does exist) items.
         * @format int64
         */
        sellerId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<number[], StandardErrorDto>({
        path: `/restapi/v2.0/marketplace/contracts/seller`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Requires the caller to have Marketplace contract view permission granted.
     *
     * @tags marketplace
     * @name GetSupplierContracts
     * @summary Get an array of contract IDs where current vendor acts as a reseller and returned vendors are suppliers.
     * @request GET:/restapi/v2.0/marketplace/contracts/supplier
     * @secure
     */
    getSupplierContracts: (
      query?: {
        /** ISO 3166-1 Alpha-2 code. Supported codes&#58; as in `CountryDto::code`. If specified, the results will be filtered to only contain resellers from said country. */
        country?: string;
        /** contract status to filter by. If specified, the results will be filtered to only contain contracts with said status. */
        status?: VendorContractStatusDto;
        /**
         * could be used to filter results by arbitrary supplier ID (vendor ID). If used, this will limit result set to zero (if no such contract exists) or one (if contract does exist) items.
         * @format int64
         */
        supplierId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<number[], StandardErrorDto>({
        path: `/restapi/v2.0/marketplace/contracts/supplier`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Requires the caller to have Marketplace contract view permission granted.
     *
     * @tags marketplace
     * @name GetMarketplaceVendor
     * @summary Get information about a marketplace vendor who is either your supplier or reseller
     * @request GET:/restapi/v2.0/marketplace/vendor/{vendorId}
     * @secure
     */
    getMarketplaceVendor: (vendorId: number, params: RequestParams = {}) =>
      this.request<MarketplaceVendorDto, StandardErrorDto>({
        path: `/restapi/v2.0/marketplace/vendor/${vendorId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags marketplace
     * @name GetMarketplaceVendorSelf
     * @summary Get information about myself, as a marketplace vendor
     * @request GET:/restapi/v2.0/marketplace/vendor/self/
     * @secure
     */
    getMarketplaceVendorSelf: (params: RequestParams = {}) =>
      this.request<MarketplaceVendorDto, StandardErrorDto>({
        path: `/restapi/v2.0/marketplace/vendor/self/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get commission data for given experience product/marketplace contract combo. Requires the caller to have Marketplace contract view permission granted.
     *
     * @tags marketplace
     * @name GetContractExperienceCommission
     * @summary Get commission data for given experience product/marketplace contract combo
     * @request GET:/restapi/v2.0/marketplace/contract/{contractId}/experience/{experienceId}/commission
     * @secure
     */
    getContractExperienceCommission: (
      contractId: number,
      experienceId: number,
      params: RequestParams = {},
    ) =>
      this.request<ExperienceCommissionDto, StandardErrorDto>({
        path: `/restapi/v2.0/marketplace/contract/${contractId}/experience/${experienceId}/commission`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Note that some invoices may not be visible to you depending on your role in this booking. For example, you will not be able to see customer invoice(s) if you act as a supplier and this booking was resold by someone else. In such case, the returned part of the object dedicated for customer invoices will be empty. Same if relevant invoices will be absent, e.g. seller invoice might be absent if booking was sold by supplier.
     *
     * @tags booking
     * @name GetBookingInvoices
     * @summary Get invoices pertaining to specified booking.
     * @request GET:/restapi/v2.0/booking/{bookingId}/invoices
     * @secure
     */
    getBookingInvoices: (
      bookingId: number,
      query: {
        /** type of invoices to bring back */
        invoiceType: BookingInvoicesRequestTypeDto;
        /** If set to true, this will bring back earlier invoices for given booking, not just the currently active invoice. Earlier invoices might exist if this particular booking was amended or cancelled etc. This value is false by default / on omission. */
        includeHistoric?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<BookingInvoicesDto, StandardErrorDto>({
        path: `/restapi/v2.0/booking/${bookingId}/invoices`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags booking, customer
     * @name GetCustomerById
     * @summary Get customer by ID
     * @request GET:/restapi/v2.0/customer/{customerId}
     * @secure
     */
    getCustomerById: (customerId: number, params: RequestParams = {}) =>
      this.request<CustomerDto, StandardErrorDto>({
        path: `/restapi/v2.0/customer/${customerId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags pricing
     * @name GetTaxById
     * @summary Get tax by ID
     * @request GET:/restapi/v2.0/tax/{taxId}
     * @secure
     */
    getTaxById: (taxId: number, params: RequestParams = {}) =>
      this.request<TaxDto, StandardErrorDto>({
        path: `/restapi/v2.0/tax/${taxId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags pricing
     * @name GetTaxes
     * @summary Get a list of all taxes owned by the current vendor as a paginated list of objects.
     * @request GET:/restapi/v2.0/taxes
     * @secure
     */
    getTaxes: (
      query: {
        /**
         * Page number, zero based
         * @format int32
         * @min 0
         */
        pageNo: number;
        /**
         * Page size (how many max items per single page)
         * @format int32
         * @min 1
         * @max 100
         */
        pageSize: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<TaxesPagedListDto, StandardErrorDto>({
        path: `/restapi/v2.0/taxes`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags pricing
     * @name GetPricingCategoryById
     * @summary Get pricing category by ID
     * @request GET:/restapi/v2.0/pricing/category/{pricingCategoryId}
     * @secure
     */
    getPricingCategoryById: (
      pricingCategoryId: number,
      params: RequestParams = {},
    ) =>
      this.request<PricingCategoryDto, StandardErrorDto>({
        path: `/restapi/v2.0/pricing/category/${pricingCategoryId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags pricing
     * @name DeletePricingCategory
     * @summary Delete pricing category by ID
     * @request DELETE:/restapi/v2.0/pricing/category/{pricingCategoryId}
     * @secure
     */
    deletePricingCategory: (
      pricingCategoryId: number,
      params: RequestParams = {},
    ) =>
      this.request<void, StandardErrorDto>({
        path: `/restapi/v2.0/pricing/category/${pricingCategoryId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags pricing
     * @name UpdatePricingCategory
     * @summary Update pricing category by ID
     * @request PUT:/restapi/v2.0/pricing/category/{pricingCategoryId}
     * @secure
     */
    updatePricingCategory: (
      pricingCategoryId: number,
      data: PricingCategoryDto,
      params: RequestParams = {},
    ) =>
      this.request<PricingCategoryDto, StandardErrorDto>({
        path: `/restapi/v2.0/pricing/category/${pricingCategoryId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags pricing
     * @name CreatePricingCategory
     * @summary Create a new pricing category
     * @request POST:/restapi/v2.0/pricing/category
     * @secure
     */
    createPricingCategory: (
      data: PricingCategoryDto,
      params: RequestParams = {},
    ) =>
      this.request<PricingCategoryDto, StandardErrorDto>({
        path: `/restapi/v2.0/pricing/category`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description result list is ordered by `PricingCategoryDto::id` ascending.
     *
     * @tags pricing
     * @name GetPricingCategories
     * @summary Get all pricing categories owned by the current vendor as a paginated list of objects.
     * @request GET:/restapi/v2.0/pricing/categories
     * @secure
     */
    getPricingCategories: (
      query: {
        /**
         * Page number, zero based
         * @format int32
         * @min 0
         */
        pageNo: number;
        /**
         * Page size (how many max items per single page)
         * @format int32
         * @min 1
         * @max 100
         */
        pageSize: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PricingCategoriesPagedListDto, StandardErrorDto>({
        path: `/restapi/v2.0/pricing/categories`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description result list is ordered by `PriceCatalogDto::id` ascending.
     *
     * @tags pricing
     * @name GetPriceCatalog
     * @summary Get all price catalogs owned by this vendor.
     * @request GET:/restapi/v2.0/price/catalogs
     * @secure
     */
    getPriceCatalog: (
      query: {
        /**
         * Page number, zero based
         * @format int32
         * @min 0
         */
        pageNo: number;
        /**
         * Page size (how many max items per single page)
         * @format int32
         * @min 1
         * @max 100
         */
        pageSize: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PriceCatalogsPagedListDto, StandardErrorDto>({
        path: `/restapi/v2.0/price/catalogs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description result list is ordered by `CancellationPolicyDto::id` ascending.
     *
     * @tags pricing
     * @name GetCancellationPolicies
     * @summary Get all cancellation policies owned by the current vendor as a paginated list of objects.
     * @request GET:/restapi/v2.0/cancellation/policies
     * @secure
     */
    getCancellationPolicies: (
      query: {
        /**
         * Page number, zero based
         * @format int32
         * @min 0
         */
        pageNo: number;
        /**
         * Page size (how many max items per single page)
         * @format int32
         * @min 1
         * @max 100
         */
        pageSize: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CancellationPoliciesPagedListDto, StandardErrorDto>({
        path: `/restapi/v2.0/cancellation/policies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags pricing
     * @name GetPriceSchedules
     * @summary Get a list of all price schedules owned by the current vendor as a paginated list of objects.
     * @request GET:/restapi/v2.0/pricing/schedules
     * @secure
     */
    getPriceSchedules: (
      query: {
        /**
         * Page number, zero based
         * @format int32
         * @min 0
         */
        pageNo: number;
        /**
         * Page size (how many max items per single page)
         * @format int32
         * @min 1
         * @max 100
         */
        pageSize: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PriceSchedulesPagedListDto, StandardErrorDto>({
        path: `/restapi/v2.0/pricing/schedules`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags pricing
     * @name GetPriceScheduleById
     * @summary Get a specific price schedule by specifying its ID.
     * @request GET:/restapi/v2.0/pricing/schedule/{priceScheduleId}
     * @secure
     */
    getPriceScheduleById: (
      priceScheduleId: number,
      params: RequestParams = {},
    ) =>
      this.request<PriceScheduleDto, StandardErrorDto>({
        path: `/restapi/v2.0/pricing/schedule/${priceScheduleId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags experience
     * @name GetExperienceComponents
     * @summary Get selected experience product components
     * @request GET:/restapi/v2.0/experience/{experienceId}/components
     * @secure
     */
    getExperienceComponents: (
      experienceId: number,
      query: {
        /** which component(s) to retrieve. Can be sent multiple times, will result multiple components being retrieved */
        componentType: ExperienceComponentTypeDto[];
      },
      params: RequestParams = {},
    ) =>
      this.request<ExperienceComponentsDto, StandardErrorDto>({
        path: `/restapi/v2.0/experience/${experienceId}/components`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags experience
     * @name SetExperienceComponents
     * @summary set experience product components. Body payload may contain any combination of updated components.
     * @request PUT:/restapi/v2.0/experience/{experienceId}/components
     * @secure
     */
    setExperienceComponents: (
      experienceId: number,
      data: ExperienceComponentsDto,
      params: RequestParams = {},
    ) =>
      this.request<ExperienceComponentsDto, StandardErrorDto>({
        path: `/restapi/v2.0/experience/${experienceId}/components`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags experience
     * @name CreateExperience
     * @summary Create a new experience product
     * @request POST:/restapi/v2.0/experience
     * @secure
     */
    createExperience: (
      data: ExperienceComponentsDto,
      params: RequestParams = {},
    ) =>
      this.request<ExperienceComponentsDto, StandardErrorDto>({
        path: `/restapi/v2.0/experience`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags experience
     * @name UploadPhotoToExperience
     * @summary Upload a new photo to the existing experience product
     * @request POST:/restapi/v2.0/experience/{experienceId}/photo
     * @secure
     */
    uploadPhotoToExperience: (
      experienceId: number,
      data: {
        /** @format binary */
        image?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          /**
           * ID of the uploaded photo
           * @format int64
           */
          id: number;
          /**
           * The URL to use for the end user. Typically this is the URL given by the CDN provider. Make sure that this URL is never cached as it may change without further notice. The property can only be retrieved and never set.
           * @maxLength 255
           */
          url: string;
        },
        StandardErrorDto
      >({
        path: `/restapi/v2.0/experience/${experienceId}/photo`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags booking
     * @name GetBookingPayments
     * @summary Get customer payments made against given booking
     * @request GET:/restapi/v2.0/booking/{bookingId}/payments
     * @secure
     */
    getBookingPayments: (bookingId: number, params: RequestParams = {}) =>
      this.request<CustomerPaymentDto[], StandardErrorDto>({
        path: `/restapi/v2.0/booking/${bookingId}/payments`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags resource
     * @name GetResourcePools
     * @summary Get paginated list of resource pool objects.
     * @request GET:/restapi/v2.0/resource/pools
     * @secure
     */
    getResourcePools: (
      query: {
        /**
         * Page number, zero based
         * @format int32
         * @min 0
         */
        pageNo: number;
        /**
         * Page size (how many max items per single page)
         * @format int32
         * @min 1
         * @max 100
         */
        pageSize: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ResourcePoolPagedListDto, StandardErrorDto>({
        path: `/restapi/v2.0/resource/pools`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags resource
     * @name CreateResourcePool
     * @summary Create resource pool, optionally link selected resources against this pool
     * @request POST:/restapi/v2.0/resource/pool
     * @secure
     */
    createResourcePool: (data: ResourcePoolDto, params: RequestParams = {}) =>
      this.request<ResourcePoolDto, StandardErrorDto>({
        path: `/restapi/v2.0/resource/pool`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags resource
     * @name GetResourcePool
     * @summary Get resource pool by ID
     * @request GET:/restapi/v2.0/resource/pool/{resourcePoolId}
     * @secure
     */
    getResourcePool: (resourcePoolId: number, params: RequestParams = {}) =>
      this.request<ResourcePoolDto, StandardErrorDto>({
        path: `/restapi/v2.0/resource/pool/${resourcePoolId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags resource
     * @name UpdateResourcePool
     * @summary Update resource pool by ID
     * @request PUT:/restapi/v2.0/resource/pool/{resourcePoolId}
     * @secure
     */
    updateResourcePool: (
      resourcePoolId: number,
      data: ResourcePoolDto,
      query?: {
        /**
         * When making changes, limit which links between resource pool and start times are affected. If specified, this will omit changes for all start times except belonging to given experience product ID. Otherwise, if omitted, will update links between this pool and all products. This option is incompatible with `skipLinkChanges` (max 1 of these both options can be supplied).
         * @format int64
         */
        limitLinkChangesToProduct?: number;
        /**
         * When making changes, don't change any links between resource pool and start times regardless what link information is supplied in the payload. This option is incompatible with `limitLinkChangesToProduct` (max 1 of these both options can be supplied).
         * @default false
         */
        skipLinkChanges?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<ResourcePoolDto, StandardErrorDto>({
        path: `/restapi/v2.0/resource/pool/${resourcePoolId}`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags resource
     * @name DeleteResourcePool
     * @summary Delete resource pool by ID
     * @request DELETE:/restapi/v2.0/resource/pool/{resourcePoolId}
     * @secure
     */
    deleteResourcePool: (resourcePoolId: number, params: RequestParams = {}) =>
      this.request<void, StandardErrorDto>({
        path: `/restapi/v2.0/resource/pool/${resourcePoolId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags resource
     * @name GetResources
     * @summary Get paginated list of resources including all details, such as capacity.
     * @request GET:/restapi/v2.0/resources
     * @secure
     */
    getResources: (
      query: {
        /**
         * Page number, zero based
         * @format int32
         * @min 0
         */
        pageNo: number;
        /**
         * Page size (how many max items per single page)
         * @format int32
         * @min 1
         * @max 100
         */
        pageSize: number;
        /**
         * Resource pool ID. If set, will only return resources linked to specified requested pool.
         * @format int64
         */
        poolId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ResourcePagedListDto, StandardErrorDto>({
        path: `/restapi/v2.0/resources`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags resource
     * @name CreateResource
     * @summary Create resource, optionally link created resource against selected pool(s)
     * @request POST:/restapi/v2.0/resource
     * @secure
     */
    createResource: (data: ResourceDto, params: RequestParams = {}) =>
      this.request<ResourceDto, StandardErrorDto>({
        path: `/restapi/v2.0/resource`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags resource
     * @name GetResource
     * @summary Get resource by ID
     * @request GET:/restapi/v2.0/resource/{resourceId}
     * @secure
     */
    getResource: (resourceId: number, params: RequestParams = {}) =>
      this.request<ResourceDto, StandardErrorDto>({
        path: `/restapi/v2.0/resource/${resourceId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags resource
     * @name UpdateResource
     * @summary Update resource by ID
     * @request PUT:/restapi/v2.0/resource/{resourceId}
     * @secure
     */
    updateResource: (
      resourceId: number,
      data: ResourceDto,
      params: RequestParams = {},
    ) =>
      this.request<ResourceDto, StandardErrorDto>({
        path: `/restapi/v2.0/resource/${resourceId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags resource
     * @name DeleteResource
     * @summary Delete resource by ID
     * @request DELETE:/restapi/v2.0/resource/{resourceId}
     * @secure
     */
    deleteResource: (
      resourceId: number,
      query?: {
        /**
         * Another resource ID to use as a replacement for deleted resource. Must be active and belong to the same vendor. Value is required if deleted resource has any future bookings.
         * @format int64
         */
        replacementResourceId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, StandardErrorDto>({
        path: `/restapi/v2.0/resource/${resourceId}`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags resource
     * @name GetResourceCloseoutsByDate
     * @summary Get resource closeouts by date. Returns array of owned resources which are closed for said date.
     * @request GET:/restapi/v2.0/resource/closeouts/{date}
     * @secure
     */
    getResourceCloseoutsByDate: (
      date: string,
      query?: {
        /**
         * Optionally allows to filter returned closed resources by pool.
         * @format int64
         */
        poolId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<number[], StandardErrorDto>({
        path: `/restapi/v2.0/resource/closeouts/${date}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags resource
     * @name CreateResourceCloseoutByDate
     * @summary Create resource closeout by date, resource ID which should no longer be bookable.
     * @request POST:/restapi/v2.0/resource/closeout/{date}
     * @secure
     */
    createResourceCloseoutByDate: (
      date: string,
      query: {
        /**
         * Resource ID to close on this day.
         * @format int64
         */
        resourceId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, StandardErrorDto>({
        path: `/restapi/v2.0/resource/closeout/${date}`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags resource
     * @name DeleteResourceCloseoutByDate
     * @summary Delete resource closeout for specified date/resource.
     * @request DELETE:/restapi/v2.0/resource/closeout/{date}
     * @secure
     */
    deleteResourceCloseoutByDate: (
      date: string,
      query: {
        /**
         * Resource ID for which to delete any closeouts
         * @format int64
         */
        resourceId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, StandardErrorDto>({
        path: `/restapi/v2.0/resource/closeout/${date}`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Retrieves a list of resource assignments by various parameters. Multiple parameters, if passed, are combined using conjunction.
     *
     * @tags resource
     * @name GetResourceAssignments
     * @summary Get resource assignments
     * @request GET:/restapi/v2.0/resource/assignments/{date}
     * @secure
     */
    getResourceAssignments: (
      date: string,
      query?: {
        /**
         * Experience product ID to get resource assignments for. If omitted, assignments for all products will be retrieved.
         * @format int64
         */
        experienceId?: number;
        /**
         * if specified, this will only retrieve assignments for specified start time only. Refers to `ExperienceStartTimeDto::id`.
         * @format int64
         */
        startTimeId?: number;
        /**
         * if specified, this will only retrieve assignments for specified booking. Note that if the booking is for a combo parent product, the results will not contain resource assignments for combo child product(s).
         * @format int64
         */
        bookingId?: number;
        /**
         * if specified, this will only retrieve assignments for specified experience booking.
         * @format int64
         */
        experienceBookingId?: number;
        /**
         * if specified, this will only retrieve assignments for specified resource pool.
         * @format int64
         */
        poolId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ResourceAssignmentDto[], void | StandardErrorDto>({
        path: `/restapi/v2.0/resource/assignments/${date}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a bunch of resource assignments based on criteria. Each criteria, if passed, is joined using conjunction (all must be met to delete).
     *
     * @tags resource
     * @name DeleteResourceAssignments
     * @summary Delete resource assignments
     * @request DELETE:/restapi/v2.0/resource/assignments/{date}
     * @secure
     */
    deleteResourceAssignments: (
      date: string,
      query?: {
        /**
         * Experience product ID to delete resource assignments for. If omitted, assignments for all products will be retrieved.
         * @format int64
         */
        experienceId?: number;
        /**
         * if specified, this will only delete assignments for specified start time only. Refers to `ExperienceStartTimeDto::id`.
         * @format int64
         */
        startTimeId?: number;
        /**
         * if specified, this will only delete assignments for specified booking.
         * @format int64
         */
        bookingId?: number;
        /**
         * if specified, this will only delete assignments for specified experience booking.
         * @format int64
         */
        experienceBookingId?: number;
        /**
         * if specified, this will only delete assignments for specified pricing category booking.
         * @format int64
         */
        pricingCategoryBookingId?: number;
        /**
         * if specified, this will only delete assignments for specified resource pool.
         * @format int64
         */
        poolId?: number;
        /**
         * if specified, this will only delete assignments for specified resource.
         * @format int64
         */
        resourceId?: number;
        /**
         * if specified, this will only delete assignments for with specified ID.
         * @format int64
         */
        assignmentId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, StandardErrorDto>({
        path: `/restapi/v2.0/resource/assignments/${date}`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Allows to delete existing resource assignment. Given pricing category booking will no longer be associated to any resource; resource will be freed from this allocation.
     *
     * @tags resource
     * @name DeleteResourceAssignment
     * @summary Delete resource assignment
     * @request DELETE:/restapi/v2.0/resource/assignment/{id}
     * @secure
     */
    deleteResourceAssignment: (id: number, params: RequestParams = {}) =>
      this.request<void, StandardErrorDto>({
        path: `/restapi/v2.0/resource/assignment/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Allows to assign a resource to an existing experience booking (meaning all underlying pricing category bookings). A previous assignment for the same pool, if exists, will be deleted for all of affected pricing category bookings.
     *
     * @tags resource
     * @name CreateResourceAssignmentForExperienceBooking
     * @summary Create resource assignment for experience booking
     * @request POST:/restapi/v2.0/resource/assignment/for/experienceBooking/{experienceBookingId}/pool/{poolId}/resource/{resourceId}
     * @secure
     */
    createResourceAssignmentForExperienceBooking: (
      experienceBookingId: number,
      poolId: number,
      resourceId: number,
      params: RequestParams = {},
    ) =>
      this.request<ResourceAssignmentDto[], StandardErrorDto>({
        path: `/restapi/v2.0/resource/assignment/for/experienceBooking/${experienceBookingId}/pool/${poolId}/resource/${resourceId}`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Allows to assign a resource to an existing single experience pricing category booking. A previous assignment for the same pool, if exists, will be deleted for said booking.
     *
     * @tags resource
     * @name CreateResourceAssignmentForPricingCategoryBooking
     * @summary Create resource assignment for pricing category booking
     * @request POST:/restapi/v2.0/resource/assignment/for/pricingCategoryBooking/{pricingCategoryBookingId}/pool/{poolId}/resource/{resourceId}
     * @secure
     */
    createResourceAssignmentForPricingCategoryBooking: (
      pricingCategoryBookingId: number,
      poolId: number,
      resourceId: number,
      query?: {
        /**
         * Resource booking ID for which to replace.
         * @format int64
         */
        assignmentId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ResourceAssignmentDto, StandardErrorDto>({
        path: `/restapi/v2.0/resource/assignment/for/pricingCategoryBooking/${pricingCategoryBookingId}/pool/${poolId}/resource/${resourceId}`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Allows to relocate existing resource assignments to another resource pool / resource. Allows overbooking if the caller has relevant permission. Only accessible to product supplier. Old assignment(s) will be freed from allocation.
     *
     * @tags resource
     * @name RelocateResourceAssignment
     * @summary Reallocate resource assignment(s) from their existing resource pool / resource to another pool / resource.
     * @request PUT:/restapi/v2.0/resource/assignments/relocate/to/{resourcePoolId}/{resourceId}
     * @secure
     */
    relocateResourceAssignment: (
      resourcePoolId: number,
      resourceId: number,
      data: number[],
      params: RequestParams = {},
    ) =>
      this.request<ResourceAssignmentDto[], StandardErrorDto>({
        path: `/restapi/v2.0/resource/assignments/relocate/to/${resourcePoolId}/${resourceId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags availability, booking
     * @name GetExperienceAvailability
     * @summary Get availability of a single experience product. This endpoint will not return any data about sold out/closed/past/out-of-resources availabilities.
     * @request GET:/restapi/v2.0/availability/{experienceId}
     * @secure
     */
    getExperienceAvailability: (
      experienceId: number,
      query: {
        /**
         * From which date availabilities should be retrieved. Format `yyyy-MM-dd`. Note the `from`..`to` period should not exceed 1 year. Range inclusive.
         * @minLength 10
         * @maxLength 10
         */
        from: string;
        /**
         * Until which date availabilities should be retrieved. Format `yyyy-MM-dd`. Note the `from`..`to` period should not exceed 1 year. Range inclusive.
         * @minLength 10
         * @maxLength 10
         */
        to: string;
        /**
         * If true, every response object will have `ExperienceAvailabilityDto::id` attribute printed.
         * @default false
         */
        showId?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<ExperienceAvailabilityDto[], StandardErrorDto>({
        path: `/restapi/v2.0/availability/${experienceId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags availability
     * @name GetExperienceAvailabilityStatistics
     * @summary Get availability statistics of a single experience product. Note that this endpoint is only available for the supplier of requested product. The result object contains much more data about given slot, also returns data about past/sold out/closed/out-of-resources availabilities.
     * @request GET:/restapi/v2.0/availability/{experienceId}/statistics
     * @secure
     */
    getExperienceAvailabilityStatistics: (
      experienceId: number,
      query: {
        /**
         * From which date availabilities should be retrieved. Format `yyyy-MM-dd`. Note the `from`..`to` period should not exceed 1 month. Range inclusive.
         * @minLength 10
         * @maxLength 10
         */
        from: string;
        /**
         * Until which date availabilities should be retrieved. Format `yyyy-MM-dd`. Note the `from`..`to` period should not exceed 1 month. Range inclusive.
         * @minLength 10
         * @maxLength 10
         */
        to: string;
        /**
         * If true, every response object will have `ExperienceAvailabilityDto::id` attribute printed.
         * @default false
         */
        showId?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<ExperienceAvailabilityStatisticsDto[], StandardErrorDto>({
        path: `/restapi/v2.0/availability/${experienceId}/statistics`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags availability
     * @name GetExperienceCloseouts
     * @summary Get availability closeouts for given product ID.
     * @request GET:/restapi/v2.0/availability/{experienceId}/closeouts
     * @secure
     */
    getExperienceCloseouts: (
      experienceId: number,
      query: {
        /**
         * From which date closeouts should be retrieved. Format `yyyy-MM-dd`. Note the `from`..`to` period should not exceed 1 year. Range inclusive.
         * @minLength 10
         * @maxLength 10
         */
        from: string;
        /**
         * Until which date closeouts should be retrieved. Format `yyyy-MM-dd`. Note the `from`..`to` period should not exceed 1 year. Range inclusive.
         * @minLength 10
         * @maxLength 10
         */
        to: string;
        /**
         * if specified, this will only retrieve closeouts for specified start time, as opposed to all start times of given product. Refers to `ExperienceStartTimeDto::id`.
         * @format int64
         */
        startTimeId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ExperienceCloseoutDto[], StandardErrorDto>({
        path: `/restapi/v2.0/availability/${experienceId}/closeouts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags availability
     * @name CreateExperienceCloseouts
     * @summary Create availability closeouts for given product ID.
     * @request POST:/restapi/v2.0/availability/{experienceId}/closeouts
     * @secure
     */
    createExperienceCloseouts: (
      experienceId: number,
      query: {
        /**
         * From which date closeouts should be created. Format `yyyy-MM-dd`. Note the `from`..`to` period should not exceed 1 year. Range inclusive.
         * @minLength 10
         * @maxLength 10
         */
        from: string;
        /**
         * Until which date closeouts should be created. Format `yyyy-MM-dd`. Note the `from`..`to` period should not exceed 1 year. Range inclusive.
         * @minLength 10
         * @maxLength 10
         */
        to: string;
        /**
         * if specified, this will only created closeouts for specified start time, as opposed to all start times of given product. Refers to `ExperienceStartTimeDto::id`.
         * @format int64
         */
        startTimeId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, StandardErrorDto>({
        path: `/restapi/v2.0/availability/${experienceId}/closeouts`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags availability
     * @name DeleteExperienceCloseouts
     * @summary Delete availability closeouts for given product ID.
     * @request DELETE:/restapi/v2.0/availability/{experienceId}/closeouts
     * @secure
     */
    deleteExperienceCloseouts: (
      experienceId: number,
      query: {
        /**
         * From which date closeouts should be deleted. Format `yyyy-MM-dd`. Note the `from`..`to` period should not exceed 1 year. Range inclusive.
         * @minLength 10
         * @maxLength 10
         */
        from: string;
        /**
         * Until which date closeouts should be deleted. Format `yyyy-MM-dd`. Note the `from`..`to` period should not exceed 1 year. Range inclusive.
         * @minLength 10
         * @maxLength 10
         */
        to: string;
        /**
         * if specified, this will only limit closeout deletion for specified start time, as opposed to all start times of given product. Refers to `ExperienceStartTimeDto::id`.
         * @format int64
         */
        startTimeId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, StandardErrorDto>({
        path: `/restapi/v2.0/availability/${experienceId}/closeouts`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Note that this only applies to Channel Manager (aka Inventory Service) linked experience products. This call will trigger availability pull originated by Bokun. Such pull will later possibly send an availability update to configured listeners, such as OTAs which have availability notification push enabled.
     *
     * @tags availability
     * @name ProductAvailabilityChanged
     * @summary Inform Bokun about product availability change (designed for Channel Manager products).
     * @request POST:/restapi/v2.0/experience/{bokunProductId}/availability/changed
     * @secure
     */
    productAvailabilityChanged: (
      bokunProductId: number,
      query: {
        /**
         * date (inclusive) from which the availability has changed. RFC 3339, section 5.6 format. Can't be in the past, considering the time zone of the product. Past dates will result 400 error.
         * @format date
         * @example "2024-12-31T00:00:00.000Z"
         */
        dateFrom: string;
        /**
         * date (inclusive) until which the availability has changed. RFC 3339, section 5.6 format. Dates up to 1 year ahead (considering product time zone) are supported, any further dates will result 400 response.
         * @format date
         * @example "2024-12-31T00:00:00.000Z"
         */
        dateTo: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, StandardErrorDto>({
        path: `/restapi/v2.0/experience/${bokunProductId}/availability/changed`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),
  };
}
