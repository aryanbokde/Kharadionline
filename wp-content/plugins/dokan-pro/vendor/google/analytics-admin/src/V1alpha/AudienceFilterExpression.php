<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/analytics/admin/v1alpha/audience.proto

namespace Google\Analytics\Admin\V1alpha;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * A logical expression of Audience dimension, metric, or event filters.
 *
 * Generated from protobuf message <code>google.analytics.admin.v1alpha.AudienceFilterExpression</code>
 */
class AudienceFilterExpression extends \Google\Protobuf\Internal\Message
{
    protected $expr;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Google\Analytics\Admin\V1alpha\AudienceFilterExpressionList $and_group
     *           A list of expressions to be AND’ed together. It can only contain
     *           AudienceFilterExpressions with or_group. This must be set for the top
     *           level AudienceFilterExpression.
     *     @type \Google\Analytics\Admin\V1alpha\AudienceFilterExpressionList $or_group
     *           A list of expressions to OR’ed together. It cannot contain
     *           AudienceFilterExpressions with and_group or or_group.
     *     @type \Google\Analytics\Admin\V1alpha\AudienceFilterExpression $not_expression
     *           A filter expression to be NOT'ed (i.e., inverted, complemented). It
     *           can only include a dimension_or_metric_filter. This cannot be set on the
     *           top level AudienceFilterExpression.
     *     @type \Google\Analytics\Admin\V1alpha\AudienceDimensionOrMetricFilter $dimension_or_metric_filter
     *           A filter on a single dimension or metric. This cannot be set on the top
     *           level AudienceFilterExpression.
     *     @type \Google\Analytics\Admin\V1alpha\AudienceEventFilter $event_filter
     *           Creates a filter that matches a specific event. This cannot be set on the
     *           top level AudienceFilterExpression.
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Google\Analytics\Admin\V1Alpha\Audience::initOnce();
        parent::__construct($data);
    }

    /**
     * A list of expressions to be AND’ed together. It can only contain
     * AudienceFilterExpressions with or_group. This must be set for the top
     * level AudienceFilterExpression.
     *
     * Generated from protobuf field <code>.google.analytics.admin.v1alpha.AudienceFilterExpressionList and_group = 1;</code>
     * @return \Google\Analytics\Admin\V1alpha\AudienceFilterExpressionList|null
     */
    public function getAndGroup()
    {
        return $this->readOneof(1);
    }

    public function hasAndGroup()
    {
        return $this->hasOneof(1);
    }

    /**
     * A list of expressions to be AND’ed together. It can only contain
     * AudienceFilterExpressions with or_group. This must be set for the top
     * level AudienceFilterExpression.
     *
     * Generated from protobuf field <code>.google.analytics.admin.v1alpha.AudienceFilterExpressionList and_group = 1;</code>
     * @param \Google\Analytics\Admin\V1alpha\AudienceFilterExpressionList $var
     * @return $this
     */
    public function setAndGroup($var)
    {
        GPBUtil::checkMessage($var, \Google\Analytics\Admin\V1alpha\AudienceFilterExpressionList::class);
        $this->writeOneof(1, $var);

        return $this;
    }

    /**
     * A list of expressions to OR’ed together. It cannot contain
     * AudienceFilterExpressions with and_group or or_group.
     *
     * Generated from protobuf field <code>.google.analytics.admin.v1alpha.AudienceFilterExpressionList or_group = 2;</code>
     * @return \Google\Analytics\Admin\V1alpha\AudienceFilterExpressionList|null
     */
    public function getOrGroup()
    {
        return $this->readOneof(2);
    }

    public function hasOrGroup()
    {
        return $this->hasOneof(2);
    }

    /**
     * A list of expressions to OR’ed together. It cannot contain
     * AudienceFilterExpressions with and_group or or_group.
     *
     * Generated from protobuf field <code>.google.analytics.admin.v1alpha.AudienceFilterExpressionList or_group = 2;</code>
     * @param \Google\Analytics\Admin\V1alpha\AudienceFilterExpressionList $var
     * @return $this
     */
    public function setOrGroup($var)
    {
        GPBUtil::checkMessage($var, \Google\Analytics\Admin\V1alpha\AudienceFilterExpressionList::class);
        $this->writeOneof(2, $var);

        return $this;
    }

    /**
     * A filter expression to be NOT'ed (i.e., inverted, complemented). It
     * can only include a dimension_or_metric_filter. This cannot be set on the
     * top level AudienceFilterExpression.
     *
     * Generated from protobuf field <code>.google.analytics.admin.v1alpha.AudienceFilterExpression not_expression = 3;</code>
     * @return \Google\Analytics\Admin\V1alpha\AudienceFilterExpression|null
     */
    public function getNotExpression()
    {
        return $this->readOneof(3);
    }

    public function hasNotExpression()
    {
        return $this->hasOneof(3);
    }

    /**
     * A filter expression to be NOT'ed (i.e., inverted, complemented). It
     * can only include a dimension_or_metric_filter. This cannot be set on the
     * top level AudienceFilterExpression.
     *
     * Generated from protobuf field <code>.google.analytics.admin.v1alpha.AudienceFilterExpression not_expression = 3;</code>
     * @param \Google\Analytics\Admin\V1alpha\AudienceFilterExpression $var
     * @return $this
     */
    public function setNotExpression($var)
    {
        GPBUtil::checkMessage($var, \Google\Analytics\Admin\V1alpha\AudienceFilterExpression::class);
        $this->writeOneof(3, $var);

        return $this;
    }

    /**
     * A filter on a single dimension or metric. This cannot be set on the top
     * level AudienceFilterExpression.
     *
     * Generated from protobuf field <code>.google.analytics.admin.v1alpha.AudienceDimensionOrMetricFilter dimension_or_metric_filter = 4;</code>
     * @return \Google\Analytics\Admin\V1alpha\AudienceDimensionOrMetricFilter|null
     */
    public function getDimensionOrMetricFilter()
    {
        return $this->readOneof(4);
    }

    public function hasDimensionOrMetricFilter()
    {
        return $this->hasOneof(4);
    }

    /**
     * A filter on a single dimension or metric. This cannot be set on the top
     * level AudienceFilterExpression.
     *
     * Generated from protobuf field <code>.google.analytics.admin.v1alpha.AudienceDimensionOrMetricFilter dimension_or_metric_filter = 4;</code>
     * @param \Google\Analytics\Admin\V1alpha\AudienceDimensionOrMetricFilter $var
     * @return $this
     */
    public function setDimensionOrMetricFilter($var)
    {
        GPBUtil::checkMessage($var, \Google\Analytics\Admin\V1alpha\AudienceDimensionOrMetricFilter::class);
        $this->writeOneof(4, $var);

        return $this;
    }

    /**
     * Creates a filter that matches a specific event. This cannot be set on the
     * top level AudienceFilterExpression.
     *
     * Generated from protobuf field <code>.google.analytics.admin.v1alpha.AudienceEventFilter event_filter = 5;</code>
     * @return \Google\Analytics\Admin\V1alpha\AudienceEventFilter|null
     */
    public function getEventFilter()
    {
        return $this->readOneof(5);
    }

    public function hasEventFilter()
    {
        return $this->hasOneof(5);
    }

    /**
     * Creates a filter that matches a specific event. This cannot be set on the
     * top level AudienceFilterExpression.
     *
     * Generated from protobuf field <code>.google.analytics.admin.v1alpha.AudienceEventFilter event_filter = 5;</code>
     * @param \Google\Analytics\Admin\V1alpha\AudienceEventFilter $var
     * @return $this
     */
    public function setEventFilter($var)
    {
        GPBUtil::checkMessage($var, \Google\Analytics\Admin\V1alpha\AudienceEventFilter::class);
        $this->writeOneof(5, $var);

        return $this;
    }

    /**
     * @return string
     */
    public function getExpr()
    {
        return $this->whichOneof("expr");
    }

}

