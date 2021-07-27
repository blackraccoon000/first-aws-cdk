#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from '@aws-cdk/core'
import { FirstAwsCdkStack } from '../lib/first-aws-cdk-stack'

const app = new cdk.App()
new FirstAwsCdkStack(app, 'FirstAwsCdkStack', {})
