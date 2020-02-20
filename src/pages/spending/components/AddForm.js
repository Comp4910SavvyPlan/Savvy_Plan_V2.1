import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import ChooseOne from "UI/forms/ChooseOne";
import FormInput from "UI/forms/Input";
import DateInput from "UI/forms/DateInput";
import RangeBar from "UI/rangeBar/RangeBar";
import MiniRangeBar from "UI/miniRangeBar/MiniRangeBar";
import ButtonLight from "UI/buttons/ButtonLight";
//import {addItem_action} from "redux/netWorth/netWorth_actions"
//import {propertyNames_selector} from "redux/netWorth/netWorth_selectors"
import _ from "lodash";
import { individualItem_data } from "pages/spending/data/spending_data";
//import {renderSavings, optimizedWithdrawals} from "services/savings/savings_functions"
//import {transaction_action, setOpitmizedValues_action} from "redux/savings/savings_actions"
//import {savings_reducer} from "redux/savings/savings_reducer"
//import {rate1, rate2} from "redux/assumptions/assumptions_selectors"
